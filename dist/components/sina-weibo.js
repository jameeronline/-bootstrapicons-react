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
var SvgSinaWeibo = function SvgSinaWeibo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "sina-weibo_svg__bi sina-weibo_svg__bi-sina-weibo",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.878 1.093a4.23 4.23 0 0 1 4.031 1.305 4.22 4.22 0 0 1 .886 4.14v.001a.612.612 0 0 1-1.166-.377 3.01 3.01 0 0 0-3.495-3.873.611.611 0 1 1-.256-1.196M3.753 9.465c.548-1.11 1.972-1.74 3.233-1.411 1.304.338 1.971 1.568 1.437 2.764-.541 1.221-2.095 1.875-3.416 1.449-1.271-.411-1.812-1.67-1.254-2.802m2.658.567c.16.066.365-.009.458-.168.088-.16.03-.34-.129-.397-.156-.062-.353.013-.446.168-.09.154-.041.333.117.397m-1.607 1.314c.413.188.963.009 1.219-.4.252-.413.12-.883-.296-1.062-.41-.172-.94.005-1.194.402-.256.4-.135.874.271 1.06"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12.014 7.238.005.001c.919.285 1.941.974 1.939 2.188 0 2.007-2.895 4.535-7.246 4.535C3.393 13.962 0 12.352 0 9.708c0-1.385.876-2.985 2.384-4.493C4.4 3.199 6.751 2.28 7.634 3.165c.39.392.427 1.065.177 1.87-.132.405.38.182.38.182 1.63-.682 3.051-.722 3.57.02.278.397.252.951-.004 1.594-.116.293.035.34.257.407m-10.4 3.101c.172 1.738 2.46 2.936 5.109 2.674 2.647-.26 4.656-1.883 4.482-3.623-.17-1.738-2.458-2.937-5.107-2.674-2.647.263-4.656 1.883-4.484 3.623m11.681-6.484a2.06 2.06 0 0 0-1.962-.634.526.526 0 1 0 .219 1.031 1.008 1.008 0 0 1 1.17 1.296.528.528 0 0 0 1.005.325 2.06 2.06 0 0 0-.432-2.018"
  }));
};
var _default = exports["default"] = SvgSinaWeibo;