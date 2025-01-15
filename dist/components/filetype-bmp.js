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
var SvgFiletypeBmp = function SvgFiletypeBmp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "filetype-bmp_svg__bi filetype-bmp_svg__bi-filetype-bmp",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 15.849h1.664q.408 0 .72-.132.315-.135.493-.386.18-.253.179-.61a1 1 0 0 0-.123-.51.85.85 0 0 0-.323-.325 1.1 1.1 0 0 0-.445-.14v-.036a1 1 0 0 0 .352-.16.8.8 0 0 0 .243-.294.9.9 0 0 0 .09-.422q0-.463-.322-.723-.322-.261-.858-.261H0zm.785-3.404h.7q.28 0 .431.14.155.138.155.384a.5.5 0 0 1-.082.296.5.5 0 0 1-.249.185 1.2 1.2 0 0 1-.433.064H.785zm0 1.62h.75q.231 0 .393.073a.5.5 0 0 1 .24.211.6.6 0 0 1 .082.325q0 .284-.205.434-.205.146-.671.146H.785zm3.474 1.784v-2.66h.038l.952 2.16h.515l.947-2.16h.038v2.66h.715V11.85h-.8l-1.14 2.596h-.026l-1.14-2.596h-.805v3.999zm3.918-3.999h1.6q.434 0 .732.179.302.176.46.477.159.302.159.677t-.162.677q-.158.299-.462.474a1.45 1.45 0 0 1-.733.173h-.803v1.342h-.79zm2.06 1.714a.8.8 0 0 0 .085-.381q0-.34-.185-.521-.185-.182-.512-.182h-.66v1.406h.66a.8.8 0 0 0 .375-.082.57.57 0 0 0 .237-.24"
  }));
};
var _default = exports["default"] = SvgFiletypeBmp;