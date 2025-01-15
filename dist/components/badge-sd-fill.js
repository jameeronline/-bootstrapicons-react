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
var SvgBadgeSdFill = function SvgBadgeSdFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "badge-sd-fill_svg__bi badge-sd-fill_svg__bi-badge-sd-fill",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.338 5.968h-.844v4.06h.844c1.116 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.077 7.114c1.521 0 2.378-.764 2.378-1.88 0-1.007-.642-1.473-1.613-1.692l-.932-.216c-.527-.114-.821-.351-.821-.712 0-.466.39-.804 1.046-.804.637 0 1.028.33 1.103.76h1.125c-.058-.923-.849-1.692-2.22-1.692-1.322 0-2.24.717-2.24 1.815 0 .91.588 1.446 1.52 1.657l.927.215c.624.145.923.36.923.778 0 .492-.391.83-1.13.83-.707 0-1.155-.342-1.234-.808H2.762c.052.95.79 1.75 2.315 1.75ZM8.307 11h2.19c1.81 0 2.684-1.107 2.684-3.015 0-1.894-.861-2.984-2.685-2.984H8.308z"
  }));
};
var _default = exports["default"] = SvgBadgeSdFill;