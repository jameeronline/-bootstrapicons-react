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
var SvgSignDoNotEnterFill = function SvgSignDoNotEnterFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "sign-do-not-enter-fill_svg__bi sign-do-not-enter-fill_svg__bi-sign-do-not-enter-fill",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4.237 4.28h-.32v1.44h.32c.396 0 .582-.239.582-.718 0-.481-.188-.722-.582-.722m2.392.859v-.277c0-.413-.211-.617-.494-.617-.285 0-.495.204-.495.617v.277c0 .414.21.618.495.618.283 0 .494-.204.494-.618m4.163 0v-.277c0-.413-.211-.617-.494-.617-.285 0-.495.204-.495.617v.277c0 .414.21.618.495.618.283 0 .494-.204.494-.618m.006 5.828v-.694h.39c.231 0 .378.126.378.354 0 .225-.142.34-.387.34z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.584 6V4h.69c.596 0 .886.355.886.998S4.867 6 4.274 6zm3.382-1.135v.272c0 .566-.318.903-.83.903-.513 0-.833-.337-.833-.903v-.272c0-.569.32-.904.832-.904.513 0 .83.337.83.904Zm1.021-.305V6h-.319V4h.293l.933 1.436h.015V4h.319v2h-.291L8 4.56zm3.142.305v.272c0 .566-.318.903-.83.903-.513 0-.833-.337-.833-.903v-.272c0-.569.32-.904.832-.904.513 0 .83.337.83.904Zm.899-.58V6h-.333V4.285h-.584V4h1.503v.285zM5.413 11.72V12H4.165v-2h1.248v.28h-.917v.57h.862v.268h-.862v.602zm.572.28h-.32v-2h.294l.933 1.436h.014v-1.435h.32V12h-.292l-.936-1.44h-.013zm2.279 0H7.93v-1.715h-.584V10H8.85v.284h-.586zm1.953-.28V12H8.97v-2h1.248v.28H9.3v.57h.863v.268H9.3v.602zM11.235 10c.42 0 .674.244.674.616a.575.575 0 0 1-.368.56l.404.824h-.373l-.36-.769h-.414V12h-.328v-2zM3.5 7h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"
  }));
};
var _default = exports["default"] = SvgSignDoNotEnterFill;