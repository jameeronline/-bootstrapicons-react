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
var SvgMouse3 = function SvgMouse3(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "mouse3_svg__bi mouse3_svg__bi-mouse3",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 0q-.891.002-1.527.463c-.418.302-.717.726-.93 1.208C4.123 2.619 4 3.879 4 5.187v.504L3.382 6A2.5 2.5 0 0 0 2 8.236v2.576C2 13.659 4.22 16 7 16h2c2.78 0 5-2.342 5-5.188V5.186c0-1.13-.272-2.044-.748-2.772-.474-.726-1.13-1.235-1.849-1.59C9.981.123 8.26 0 7 0m2.5 6.099V1.232c.51.11 1.008.267 1.46.49.596.293 1.099.694 1.455 1.24.355.543.585 1.262.585 2.225v1.69zm-1-5.025v4.803L5 5.099c.006-1.242.134-2.293.457-3.024.162-.366.363-.63.602-.801C6.292 1.105 6.593 1 7 1c.468 0 .98.018 1.5.074M5 6.124 13 7.9v2.912C13 13.145 11.19 15 9 15H7c-2.19 0-4-1.855-4-4.188V8.236a1.5 1.5 0 0 1 .83-1.342l.187-.093c.01.265.024.58.047.92.062.938.19 2.12.462 2.937a.5.5 0 1 0 .948-.316c-.227-.683-.35-1.75-.413-2.688a29 29 0 0 1-.06-1.528v-.002z"
  }));
};
var _default = exports["default"] = SvgMouse3;