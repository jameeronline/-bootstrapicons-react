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
var SvgEmojiGrimaceFill = function SvgEmojiGrimaceFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "emoji-grimace-fill_svg__bi emoji-grimace-fill_svg__bi-emoji-grimace-fill",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7 6.25C7 5.56 6.552 5 6 5s-1 .56-1 1.25.448 1.25 1 1.25 1-.56 1-1.25m3 1.25c.552 0 1-.56 1-1.25S10.552 5 10 5s-1 .56-1 1.25.448 1.25 1 1.25m1.5 4.5a1.5 1.5 0 0 0 1.48-1.25v-.003a1.5 1.5 0 0 0 0-.497A1.5 1.5 0 0 0 11.5 9h-7a1.5 1.5 0 0 0-1.48 1.25v.003a1.5 1.5 0 0 0 0 .497A1.5 1.5 0 0 0 4.5 12zm-7.969-1.25a1 1 0 0 0 .969.75h.25v-.75zm8.938 0a1 1 0 0 1-.969.75h-.25v-.75zM11.5 9.5a1 1 0 0 1 .969.75H11.25V9.5zm-7.969.75A1 1 0 0 1 4.5 9.5h.25v.75zM5.25 11.5h1v-.75h-1zm2.5 0h-1v-.75h1zm1.5 0h-1v-.75h1zm1.5 0h-1v-.75h1zm-1-2h1v.75h-1zm-1.5 0h1v.75h-1zm-1.5 0h1v.75h-1zm-1.5 0h1v.75h-1z"
  }));
};
var _default = exports["default"] = SvgEmojiGrimaceFill;