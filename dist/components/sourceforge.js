"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgSourceforge = function SvgSourceforge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "sourceforge_svg__bi sourceforge_svg__bi-sourceforge",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.13 8.43c0-2.604-.929-3.79-1.42-4.24a.14.14 0 0 0-.232.123c.095 1.472-1.762 1.84-1.762 4.144v.013c0 1.404 1.065 2.55 2.376 2.55s2.377-1.146 2.377-2.55v-.013c0-.655-.246-1.282-.492-1.745-.055-.096-.191-.055-.178.027.451 1.99-.669 3.217-.669 1.69Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.303 13.923a.25.25 0 0 1-.164-.068L.061 7.789c-.081-.082-.081-.232 0-.327l6.42-6.407A.3.3 0 0 1 6.63 1h1.844c.109 0 .177.068.204.136a.22.22 0 0 1-.054.246L2.602 7.407a.304.304 0 0 0 0 .436l4.766 4.771c.082.082.082.232 0 .328l-.915.927a.3.3 0 0 1-.15.054m1.216 1.063a.22.22 0 0 1-.15-.382l6.036-6.025a.32.32 0 0 0 .096-.218.27.27 0 0 0-.096-.218l-4.78-4.771c-.082-.082-.082-.232 0-.327l.929-.927a.23.23 0 0 1 .163-.068c.069 0 .11.04.15.081l6.065 6.067c.04.04.068.095.068.163a.23.23 0 0 1-.068.164l-6.42 6.407A.23.23 0 0 1 9.35 15H7.52z"
  }));
};
var _default = exports["default"] = SvgSourceforge;