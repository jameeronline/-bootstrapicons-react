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
var SvgPciCardSound = function SvgPciCardSound(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "pci-card-sound_svg__bi pci-card-sound_svg__bi-pci-card-sound",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.562 7.39 8 7.04v1.92l-.438-.35a.5.5 0 0 0-.312-.11H6.5v-1h.75a.5.5 0 0 0 .312-.11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.5 1a.5.5 0 0 0 0 1H1v12.5a.5.5 0 0 0 1 0V12h13.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H2V1.5a.5.5 0 0 0-.5-.5zm11.619 3.881q.15.173.28.367c.484.726.768 1.7.768 2.752s-.284 2.026-.768 2.752q-.13.195-.28.367l-.71-.71q.082-.096.158-.212c.36-.54.6-1.315.6-2.197s-.24-1.657-.6-2.198a3 3 0 0 0-.157-.212zm-1.375 4.863L10 9c.057 0 .17-.035.291-.217.12-.178.209-.454.209-.783 0-.33-.09-.605-.209-.783C10.17 7.035 10.057 7 10 7l.744-.744c.15.113.278.254.38.406.242.364.376.839.376 1.338s-.134.974-.377 1.338a1.7 1.7 0 0 1-.379.406M9 6v4a.5.5 0 0 1-.812.39L7.075 9.5H6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h1.075l1.113-.89A.5.5 0 0 1 9 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 12.5H3v1a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 .5-.5zm.5 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5"
  }));
};
var _default = exports["default"] = SvgPciCardSound;