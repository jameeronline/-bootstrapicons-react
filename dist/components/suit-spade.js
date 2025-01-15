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
var SvgSuitSpade = function SvgSuitSpade(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "suit-spade_svg__bi suit-spade_svg__bi-suit-spade",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 0a.5.5 0 0 1 .429.243c1.359 2.265 2.925 3.682 4.25 4.882q.144.128.282.255C14.308 6.604 15.5 7.747 15.5 9.5a4 4 0 0 1-5.406 3.746c.235.39.491.782.722 1.131.434.659-.01 1.623-.856 1.623H6.04c-.845 0-1.29-.964-.856-1.623.263-.397.51-.777.728-1.134A4 4 0 0 1 .5 9.5c0-1.753 1.192-2.896 2.539-4.12l.281-.255c1.326-1.2 2.892-2.617 4.251-4.882A.5.5 0 0 1 8 0M3.711 6.12C2.308 7.396 1.5 8.253 1.5 9.5a3 3 0 0 0 5.275 1.956.5.5 0 0 1 .868.43c-.094.438-.33.932-.611 1.428a29 29 0 0 1-1.013 1.614.03.03 0 0 0-.005.018.07.07 0 0 0 .024.054h3.924a.07.07 0 0 0 .024-.054.03.03 0 0 0-.005-.018c-.3-.455-.658-1.005-.96-1.535-.294-.514-.57-1.064-.664-1.507a.5.5 0 0 1 .868-.43A3 3 0 0 0 14.5 9.5c0-1.247-.808-2.104-2.211-3.38L12 5.86c-1.196-1.084-2.668-2.416-4-4.424-1.332 2.008-2.804 3.34-4 4.422l-.289.261z"
  }));
};
var _default = exports["default"] = SvgSuitSpade;