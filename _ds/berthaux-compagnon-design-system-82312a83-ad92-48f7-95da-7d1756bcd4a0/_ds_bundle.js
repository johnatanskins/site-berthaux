/* @ds-bundle: {"format":3,"namespace":"BerthauxCompagnonDesignSystem_82312a","components":[{"name":"BadgePill","sourcePath":"components/core/BadgePill.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CommuneChip","sourcePath":"components/core/CommuneChip.jsx"},{"name":"ContactItem","sourcePath":"components/core/ContactItem.jsx"},{"name":"FaqItem","sourcePath":"components/core/FaqItem.jsx"},{"name":"GoogleRating","sourcePath":"components/core/GoogleRating.jsx"},{"name":"ReviewCard","sourcePath":"components/core/ReviewCard.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/BadgePill.jsx":"f313de90f5bb","components/core/Button.jsx":"ac9cac11615d","components/core/CommuneChip.jsx":"3411207ab115","components/core/ContactItem.jsx":"bd24fd71ba67","components/core/FaqItem.jsx":"9e84a6f54e6c","components/core/GoogleRating.jsx":"99e0f6e7957c","components/core/ReviewCard.jsx":"075abe4b1de6","components/core/ServiceCard.jsx":"0ee6cfe7dcd2","components/core/Stat.jsx":"44d5425a17a8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BerthauxCompagnonDesignSystem_82312a = window.BerthauxCompagnonDesignSystem_82312a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/BadgePill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Glassy pill used on the dark hero and as a section eyebrow chip.
 * Defaults to the gold-star "rating" treatment; pass tone="gold" for a
 * gold pin dot instead, or icon for a custom leading node.
 */
function BadgePill({
  children,
  tone = 'star',
  icon,
  onDark = true,
  style,
  ...rest
}) {
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 14px',
    borderRadius: 'var(--r-pill)',
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: 600,
    background: onDark ? 'rgba(255,255,255,.10)' : '#fff',
    border: onDark ? '1px solid rgba(255,255,255,.18)' : '1px solid var(--line)',
    color: onDark ? '#fff' : 'var(--ink)',
    backdropFilter: onDark ? 'blur(6px)' : undefined,
    ...style
  };
  let lead = icon;
  if (!lead && tone === 'star') lead = /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "\u2605");
  if (!lead && tone === 'gold') lead = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--gold)'
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), lead, children);
}
Object.assign(__ds_scope, { BadgePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BadgePill.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Berthaux Compagnon button. Matches the site's .btn system exactly:
 * red = primary action (call / quote), navy = secondary, ghost = on light,
 * outlineWhite = on the dark navy hero.
 */
function Button({
  children,
  variant = 'red',
  size = 'md',
  href,
  icon,
  iconRight,
  type = 'button',
  onClick,
  disabled,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: size === 'lg' ? '18px 26px' : '16px 22px',
    borderRadius: size === 'lg' ? '14px' : '12px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: size === 'lg' ? '16.5px' : '15.5px',
    letterSpacing: '-.005em',
    whiteSpace: 'nowrap',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: 'transform .15s var(--ease), box-shadow .2s var(--ease), background .2s, color .2s, border-color .2s'
  };
  const variants = {
    red: {
      background: 'var(--red)',
      color: '#fff',
      boxShadow: 'var(--shadow-red)'
    },
    navy: {
      background: 'var(--navy)',
      color: '#fff'
    },
    ghost: {
      background: '#fff',
      color: 'var(--navy)',
      borderColor: 'var(--line)'
    },
    outlineWhite: {
      background: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,.45)'
    }
  };
  const props = {
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onClick: disabled ? undefined : onClick,
    'data-variant': variant,
    ...rest
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: 18,
      height: 18
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: 18,
      height: 18
    }
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, props), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled
  }, props), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CommuneChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rounded commune/zone chip with a gold pin dot, as in the zone list.
 * Renders an <a> when href is set. Hover turns the border + text navy.
 */
function CommuneChip({
  children,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#fff',
    border: hover ? '1px solid var(--navy)' : '1px solid var(--line)',
    borderRadius: 'var(--r-pill)',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: 600,
    color: hover ? 'var(--navy)' : 'var(--ink)',
    cursor: 'pointer',
    transition: 'border-color .15s, color .15s',
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--gold)'
    }
  }), children);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: base
  }, handlers, rest), inner);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { CommuneChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CommuneChip.jsx", error: String((e && e.message) || e) }); }

// components/core/ContactItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contact row: square icon tile + mono label + bold value. Used in the
 * "Demande de devis" contact list. tone="red" for the urgent mobile line.
 */
function ContactItem({
  icon,
  label,
  value,
  href,
  tone = 'navy',
  big = false,
  style,
  ...rest
}) {
  const Wrapper = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    href: href,
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: '14px',
      padding: '18px',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: 'var(--r)',
      background: tone === 'red' ? 'var(--red)' : 'var(--navy)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--ink-3)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      display: 'block'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--navy)',
      fontSize: big ? '20px' : '16px',
      letterSpacing: big ? '-.01em' : 'normal',
      marginTop: '2px',
      display: 'block'
    }
  }, value)));
}
Object.assign(__ds_scope, { ContactItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ContactItem.jsx", error: String((e && e.message) || e) }); }

// components/core/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Accordion FAQ item. Controlled (pass open + onToggle) or uncontrolled.
 * Navy question, rotating "+" tile, smooth max-height answer reveal.
 */
function FaqItem({
  question,
  children,
  open: openProp,
  defaultOpen = false,
  onToggle,
  style,
  ...rest
}) {
  const [openState, setOpenState] = React.useState(defaultOpen);
  const open = openProp !== undefined ? openProp : openState;
  const toggle = () => {
    if (onToggle) onToggle(!open);
    if (openProp === undefined) setOpenState(o => !o);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: '#fff',
      border: open ? '1px solid var(--navy)' : '1px solid var(--line)',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: open ? 'var(--shadow-sm)' : 'none',
      transition: 'border-color .2s, box-shadow .2s',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '18px',
      padding: '22px 26px',
      textAlign: 'left',
      fontWeight: 700,
      fontSize: '16.5px',
      color: 'var(--navy)',
      fontFamily: 'var(--font-display)'
    }
  }, question, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '8px',
      background: open ? 'var(--navy)' : 'var(--bg)',
      color: open ? '#fff' : 'var(--navy)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform .3s var(--ease), background .2s, color .2s',
      fontWeight: 700,
      fontSize: '18px'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? '280px' : '0',
      overflow: 'hidden',
      transition: 'max-height .35s var(--ease)',
      color: 'var(--ink-2)',
      fontSize: '15.2px',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 26px 24px'
    }
  }, children)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/core/GoogleRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Google rating mark: the four-color "Google" wordmark, gold stars and
 * the rating + review count. Used above the reviews and in the zone band.
 */
function GoogleRating({
  rating = '4,9',
  count = 80,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      background: '#fff',
      border: '1px solid var(--line)',
      padding: '10px 16px',
      borderRadius: 'var(--r)',
      boxShadow: 'var(--shadow-sm)',
      fontWeight: 700,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      letterSpacing: '-.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4285F4'
    }
  }, "G"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#EA4335'
    }
  }, "o"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FBBC05'
    }
  }, "o"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4285F4'
    }
  }, "g"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#34A853'
    }
  }, "l"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#EA4335'
    }
  }, "e")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)',
      letterSpacing: '2px',
      fontSize: '18px'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)',
      fontSize: '14px',
      fontWeight: 600
    }
  }, rating, " \u2014 ", count, " avis"));
}
Object.assign(__ds_scope, { GoogleRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GoogleRating.jsx", error: String((e && e.message) || e) }); }

// components/core/ReviewCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AV_GRADIENTS = {
  a: 'linear-gradient(135deg, #0F2A5C, #234386)',
  b: 'linear-gradient(135deg, #C8102E, #e64a63)',
  c: 'linear-gradient(135deg, #F4B400, #dfa000)'
};

/**
 * Google review card: 5 gold stars, the quote, then an avatar with
 * initials, the reviewer name and a mono location line.
 */
function ReviewCard({
  quote,
  name,
  meta,
  initials,
  avatar = 'a',
  rating = 5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: '26px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold)',
      letterSpacing: '2px',
      fontSize: '16px'
    }
  }, '★'.repeat(rating)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: '15px',
      lineHeight: 1.6,
      margin: 0
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: 'auto',
      paddingTop: '16px',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontWeight: 800,
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      letterSpacing: '-.02em',
      background: AV_GRADIENTS[avatar] || AV_GRADIENTS.a
    }
  }, initials), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '14.5px',
      display: 'block',
      color: 'var(--ink)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--ink-3)',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '.05em'
    }
  }, meta))));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numbered service card from the "Six savoir-faire" grid. Icon tile,
 * number index, title, description and a red text link. Lifts on hover
 * with a navy→gold top rule.
 */
function ServiceCard({
  number,
  icon,
  title,
  children,
  linkLabel = 'Demander un devis →',
  href = '#devis',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#fff',
      border: hover ? '1px solid transparent' : '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      position: 'relative',
      overflow: 'hidden',
      transform: hover ? 'translateY(-6px)' : 'none',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      transition: 'transform .25s var(--ease), box-shadow .25s var(--ease), border-color .25s',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: '3px',
      background: 'linear-gradient(90deg, var(--navy), var(--gold))',
      transform: hover ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform .35s var(--ease)'
    }
  }), number ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '18px',
      right: '22px',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--ink-3)',
      letterSpacing: '.1em'
    }
  }, number) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '54px',
      height: '54px',
      borderRadius: 'var(--r)',
      background: hover ? 'var(--navy)' : 'linear-gradient(135deg, #eef2ff, #fff)',
      border: hover ? '1px solid var(--navy)' : '1px solid var(--line)',
      color: hover ? 'var(--gold)' : 'var(--navy)',
      display: 'grid',
      placeItems: 'center',
      transition: 'background .25s, color .25s, border-color .25s'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '20px',
      color: 'var(--navy)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: '14.5px',
      margin: 0
    }
  }, children), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      marginTop: 'auto',
      color: 'var(--red)',
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      gap: hover ? '10px' : '6px',
      fontSize: '14.5px',
      transition: 'gap .2s'
    }
  }, linkLabel));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big stat with the gold left rule, as in the stats band
 * (e.g. "500+ / Toits rénovés en Île-de-France").
 */
function Stat({
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '8px 4px 8px 18px',
      borderLeft: '3px solid var(--gold)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '46px',
      letterSpacing: '-.03em',
      color: 'var(--navy)',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--ink-2)',
      marginTop: '6px'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BadgePill = __ds_scope.BadgePill;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CommuneChip = __ds_scope.CommuneChip;

__ds_ns.ContactItem = __ds_scope.ContactItem;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.GoogleRating = __ds_scope.GoogleRating;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Stat = __ds_scope.Stat;

})();
