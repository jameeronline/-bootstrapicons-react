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
var SvgDuffleFill = function SvgDuffleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "duffle-fill_svg__bi duffle-fill_svg__bi-duffle-fill",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5.007 4.097q.011-.146.027-.298c.05-.464.141-.979.313-1.45.169-.465.432-.933.853-1.249 1.115-.836 2.485-.836 3.6 0 .42.316.684.784.853 1.25.171.47.263.985.313 1.449q.016.15.027.298c1.401.194 2.65.531 3.525 1.012 2.126 1.169 1.446 6.095 1.089 8.018a.954.954 0 0 1-.95.772H1.343a.954.954 0 0 1-.95-.772c-.357-1.923-1.037-6.85 1.09-8.018.873-.48 2.123-.818 3.524-1.012M4.05 5.633a22 22 0 0 0-1.565.352l-.091.026-.034.01a.5.5 0 0 0 .282.959l.005-.002.02-.005.08-.023a21 21 0 0 1 1.486-.334A21 21 0 0 1 8 6.25c1.439 0 2.781.183 3.767.367a21 21 0 0 1 1.567.356l.02.005.004.001a.5.5 0 0 0 .283-.959h-.003l-.006-.002-.025-.007a15 15 0 0 0-.43-.113 22 22 0 0 0-1.226-.265A22 22 0 0 0 8 5.25c-1.518 0-2.926.192-3.95.383M6.8 1.9c-.203.153-.377.42-.513.791a5.3 5.3 0 0 0-.265 1.292 35 35 0 0 1 1.374-.076c.866-.022 1.742.003 2.584.076a5.3 5.3 0 0 0-.266-1.292c-.135-.372-.309-.638-.513-.791-.76-.57-1.64-.57-2.4 0Z"
  }));
};
var _default = exports["default"] = SvgDuffleFill;