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
var SvgFiletypeAac = function SvgFiletypeAac(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "filetype-aac_svg__bi filetype-aac_svg__bi-filetype-aac",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-5.808 8.554a1.7 1.7 0 0 0-.103.633v.495q0 .369.103.627a.83.83 0 0 0 .299.393.85.85 0 0 0 .477.131.9.9 0 0 0 .402-.088.7.7 0 0 0 .272-.248.8.8 0 0 0 .117-.364h.765v.076a1.27 1.27 0 0 1-.226.674q-.204.29-.55.454a1.8 1.8 0 0 1-.785.164q-.54 0-.915-.216a1.4 1.4 0 0 1-.57-.627q-.195-.408-.194-.976v-.498q0-.568.196-.978.195-.411.571-.633.378-.223.912-.223.327 0 .606.097.28.093.49.272a1.33 1.33 0 0 1 .465.964v.073h-.765a.85.85 0 0 0-.12-.38.7.7 0 0 0-.272-.261.8.8 0 0 0-.399-.097.8.8 0 0 0-.474.138.87.87 0 0 0-.302.398M.8 15.925l.313-1.028H2.45l.314 1.028h.84l-1.335-3.999h-.926l-1.342 4zm1.002-3.234.489 1.617H1.277l.49-1.617zm2.63 3.234.313-1.028H6.08l.313 1.028h.841L5.9 11.926h-.926l-1.341 4zm1.001-3.234.49 1.617H4.909l.49-1.617z"
  }));
};
var _default = exports["default"] = SvgFiletypeAac;