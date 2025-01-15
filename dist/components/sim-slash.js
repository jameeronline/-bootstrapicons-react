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
var SvgSimSlash = function SvgSimSlash(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "sim-slash_svg__bi sim-slash_svg__bi-sim-slash",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m11.646.44.897.896-.707.707-.897-.897A.5.5 0 0 0 10.586 1H3.5a.5.5 0 0 0-.5.5v9.379l-1 1V1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44M10.5 3q.175 0 .34.039L9.879 4H8.5v1.379L6.879 7H5v1.879l-1 1V4.5A1.5 1.5 0 0 1 5.5 3zM12 6.121l-1 1V9H9.121L7.5 10.621V12H6.121l-.961.961q.165.039.34.039h5a1.5 1.5 0 0 0 1.5-1.5zM3.5 15a.5.5 0 0 1-.288-.091l-.71.71c.265.237.615.381.998.381h9a1.5 1.5 0 0 0 1.5-1.5V4.121l-1 1V14.5a.5.5 0 0 1-.5.5zm2-11a.5.5 0 0 0-.5.5V6h2.5V4zm5.5 6v1.5a.5.5 0 0 1-.5.5h-2v-2zm3.854-8.146a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708z"
  }));
};
var _default = exports["default"] = SvgSimSlash;