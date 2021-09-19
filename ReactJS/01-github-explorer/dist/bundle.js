"use strict";

var _react = _interopRequireDefault(require("react"));

var _user$adress;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function app() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello World!");
}

var user = {
  name: Gustavo
};
console.log((_user$adress = user.adress) === null || _user$adress === void 0 ? void 0 : _user$adress.street);
