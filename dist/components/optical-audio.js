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
var SvgOpticalAudio = function SvgOpticalAudio(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "optical-audio_svg__bi optical-audio_svg__bi-optical-audio",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M8 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3.05a2.5 2.5 0 0 0 0-4.9V4.5a.5.5 0 0 0-.146-.354l-2-2A.5.5 0 0 0 11.5 2h-7a.5.5 0 0 0-.354.146l-2 2A.5.5 0 0 0 2 4.5v2.05a2.5 2.5 0 0 0 0 4.9zm1-.5v-3a.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 0-3A.5.5 0 0 0 3 7V4.707L4.707 3h6.586L13 4.707V7a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5v3z"
  }));
};
var _default = exports["default"] = SvgOpticalAudio;