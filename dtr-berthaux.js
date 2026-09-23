/* =========================================================================
   DTR — Adaptation du texte selon la publicité Google Ads
   =========================================================================
   Quand un visiteur arrive depuis une annonce, l'adresse contient le mot-clé
   qu'il a tapé et parfois la ville, par exemple :
        lescompagnonsberthaux.com/?kw=couvreur+massy
        lescompagnonsberthaux.com/?kw=fuite+toiture&ville=antony

   Ce fichier lit ces informations et adapte trois endroits du texte :
        <span data-dtr="service">  ->  "Réparation de fuite de toiture"
        <span data-dtr="lieu">     ->  "à Massy (91300)"
        <span data-dtr="ville">    ->  "Massy"

   Règle de sécurité : SEULES les villes et les services de la liste ci-dessous
   sont acceptés. Si le visiteur bricole l'adresse avec n'importe quoi, la page
   garde son texte d'origine. Aucun texte venant de l'adresse n'est affiché tel
   quel : on affiche uniquement des valeurs écrites dans ce fichier.
   ========================================================================= */
(function () {
  'use strict';

  /* ---------- 1. Les villes acceptées (reprises des pages villes du site) ----------
     Format : [ nom affiché, code postal, alias supplémentaires séparés par une virgule ] */
  var VILLES = [
    ['Antony', '92160'],
    ['Arcueil', '94110'],
    ['Bagneux', '92220'],
    ['Ballainvilliers', '91160'],
    ['Bièvres', '91570'],
    ['Bourg-la-Reine', '92340'],
    ['Cachan', '94230'],
    ['Champlan', '91160'],
    ['Châtenay-Malabry', '92290', 'chatenay'],
    ['Châtillon', '92320'],
    ['Chevilly-Larue', '94550', 'chevilly'],
    ['Chilly-Mazarin', '91380', 'chilly'],
    ['Choisy-le-Roi', '94600', 'choisy'],
    ['Clamart', '92140'],
    ['Épinay-sur-Orge', '91360', 'epinay sur orge,epinay'],
    ['Fontenay-aux-Roses', '92260', 'fontenay'],
    ['Fresnes', '94260'],
    ['Igny', '91430'],
    ['Le Kremlin-Bicêtre', '94270', 'kremlin bicetre,kremlin,bicetre'],
    ["L'Haÿ-les-Roses", '94240', 'l hay les roses,hay les roses,lhay'],
    ['Le Plessis-Robinson', '92350', 'plessis robinson,plessis'],
    ['Les Ulis', '91940', 'ulis'],
    ['Longjumeau', '91160'],
    ['Malakoff', '92240'],
    ['Massy', '91300'],
    ['Montrouge', '92120'],
    ['Orly', '94310'],
    ['Orsay', '91400'],
    ['Palaiseau', '91120'],
    ['Rungis', '94150'],
    ['Saulx-les-Chartreux', '91160', 'saulx les chartreux,saulx'],
    ['Sceaux', '92330'],
    ['Thiais', '94320'],
    ['Verrières-le-Buisson', '91370', 'verrieres le buisson,verrieres'],
    ['Villebon-sur-Yvette', '91140', 'villebon sur yvette,villebon'],
    ['Villejuif', '94800'],
    ['Villeneuve-le-Roi', '94290', 'villeneuve le roi'],
    ['Wissous', '91320']
  ];

  /* ---------- 2. Les services acceptés ----------
     L'ordre compte : le premier reconnu gagne. Les mots les plus précis sont
     placés avant les mots génériques, pour que "fuite toiture" donne bien
     "Réparation de fuite de toiture" et non "Rénovation de toiture". */
  var SERVICES = [
    ['fuite', 'Réparation de fuite de toiture'],
    ['demoussage', 'Démoussage de toiture'],
    ['zinguerie', 'Zinguerie'],
    ['gouttiere', 'Pose et réparation de gouttières'],
    ['charpente', 'Charpente'],
    ['toiture', 'Rénovation de toiture'],
    ['couvreur', 'Couvreur']
  ];

  /* ---------- 3. Petits utilitaires ---------- */

  // Met un texte à plat : minuscules, sans accent, sans tiret ni "+".
  // "Saulx-les-Chartreux" et "saulx+les+chartreux" donnent la même chose.
  function aplatir(texte) {
    return String(texte || '')
      .normalize('NFD')                  // sépare les lettres de leurs accents
      .replace(/[̀-ͯ]/g, '')   // supprime les accents
      .toLowerCase()
      .replace(/['’]/g, ' ')             // apostrophes -> espace
      .replace(/[^a-z0-9]+/g, ' ')       // +, -, _, ponctuation -> espace
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Cherche une expression en tant que mot entier (évite de voir "ville"
  // à l'intérieur de "villeneuve").
  function contientExpression(texteAplati, expressionAplatie) {
    if (!expressionAplatie) return false;
    var motif = expressionAplatie.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(^| )' + motif + '( |$)').test(texteAplati);
  }

  // "Massy" -> "à Massy", "Les Ulis" -> "aux Ulis", "Le Plessis-Robinson" -> "au Plessis-Robinson"
  function avecArticle(nomVille) {
    if (/^Les /.test(nomVille)) return 'aux ' + nomVille.slice(4);
    if (/^Le /.test(nomVille)) return 'au ' + nomVille.slice(3);
    return 'à ' + nomVille;
  }

  // Toutes les écritures acceptées pour une ville, de la plus longue à la plus courte.
  function ecrituresDe(entree) {
    var liste = [aplatir(entree[0])];
    if (entree[2]) {
      entree[2].split(',').forEach(function (a) {
        var v = aplatir(a);
        if (v && liste.indexOf(v) === -1) liste.push(v);
      });
    }
    return liste.sort(function (a, b) { return b.length - a.length; });
  }

  /* ---------- 4. Lecture de l'adresse ---------- */
  var parametres;
  try {
    parametres = new URLSearchParams(window.location.search);
  } catch (e) {
    return; // navigateur trop ancien : on ne touche à rien
  }
  var kw = aplatir(parametres.get('kw'));
  var villeDemandee = aplatir(parametres.get('ville'));

  /* ---------- 5. Reconnaissance de la ville ---------- */
  // On cherche d'abord dans le paramètre "ville", puis dans le mot-clé.
  // Les noms les plus longs sont testés en premier.
  var villeTrouvee = null;
  var candidates = VILLES.slice().sort(function (a, b) {
    return aplatir(b[0]).length - aplatir(a[0]).length;
  });

  [villeDemandee, kw].forEach(function (source) {
    if (villeTrouvee || !source) return;
    candidates.some(function (entree) {
      var ok = ecrituresDe(entree).some(function (ecriture) {
        return source === ecriture || contientExpression(source, ecriture);
      });
      if (ok) { villeTrouvee = entree; return true; }
      return false;
    });
  });

  /* ---------- 6. Reconnaissance du service ---------- */
  var serviceTrouve = null;
  SERVICES.some(function (paire) {
    if (kw.indexOf(paire[0]) !== -1) { serviceTrouve = paire[1]; return true; }
    return false;
  });

  /* ---------- 7. Mémoire de la visite ----------
     Si le visiteur navigue vers une autre page du site sans les paramètres,
     on retrouve ce qui avait été reconnu à son arrivée. */
  var MEMOIRE = 'berthaux_dtr';
  if (!villeTrouvee && !serviceTrouve) {
    try {
      var enregistre = JSON.parse(window.sessionStorage.getItem(MEMOIRE) || 'null');
      if (enregistre) {
        if (enregistre.ville) {
          VILLES.some(function (entree) {
            if (entree[0] === enregistre.ville) { villeTrouvee = entree; return true; }
            return false;
          });
        }
        if (enregistre.service) {
          SERVICES.some(function (paire) {
            if (paire[1] === enregistre.service) { serviceTrouve = paire[1]; return true; }
            return false;
          });
        }
      }
    } catch (e) { /* navigation privée ou stockage bloqué : sans importance */ }
  } else {
    try {
      window.sessionStorage.setItem(MEMOIRE, JSON.stringify({
        ville: villeTrouvee ? villeTrouvee[0] : null,
        service: serviceTrouve || null
      }));
    } catch (e) { /* sans importance */ }
  }

  /* ---------- 8. Rien de reconnu : on ne touche à rien ---------- */
  if (!villeTrouvee && !serviceTrouve) return;

  /* ---------- 9. Application du texte ---------- */
  function ecrire(selecteur, texte) {
    if (!texte) return;
    var elements = document.querySelectorAll('[data-dtr="' + selecteur + '"]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = texte; // jamais innerHTML
    }
  }

  var texteLieu = villeTrouvee ? avecArticle(villeTrouvee[0]) + ' (' + villeTrouvee[1] + ')' : null;

  ecrire('service', serviceTrouve);
  ecrire('lieu', texteLieu);
  ecrire('ville', villeTrouvee ? villeTrouvee[0] : null);

  /* ---------- 10. Titre de l'onglet ---------- */
  var titre = (serviceTrouve || 'Couvreur') + (texteLieu ? ' ' + texteLieu : '') + ' — Berthaux Compagnon';
  document.title = titre;
})();
