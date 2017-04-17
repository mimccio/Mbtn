'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\n    font-weight: ', ';\n    background-color: ', ';\n    color: ', ';\n    border: none;\n    box-shadow: 0 3px 8px ', ';\n\n    &:hover {\n      color: ', ';\n      text-shadow:\n        0 1px 2px ', ',\n        0 2px 5px ', ';\n\n    }\n\n    &:hover:after {\n      box-shadow:\n        0 0 4px ', ',\n        0 4px 10px ', ';\n      border-color: ', ';\n    }\n\n    &:active:before {\n      transform: scale(1.1);\n    }\n  '], ['\n\n    font-weight: ', ';\n    background-color: ', ';\n    color: ', ';\n    border: none;\n    box-shadow: 0 3px 8px ', ';\n\n    &:hover {\n      color: ', ';\n      text-shadow:\n        0 1px 2px ', ',\n        0 2px 5px ', ';\n\n    }\n\n    &:hover:after {\n      box-shadow:\n        0 0 4px ', ',\n        0 4px 10px ', ';\n      border-color: ', ';\n    }\n\n    &:active:before {\n      transform: scale(1.1);\n    }\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StandardButton = require('./StandardButton');

var _StandardButton2 = _interopRequireDefault(_StandardButton);

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mbtn = function (_Component) {
  _inherits(Mbtn, _Component);

  function Mbtn() {
    _classCallCheck(this, Mbtn);

    return _possibleConstructorReturn(this, (Mbtn.__proto__ || Object.getPrototypeOf(Mbtn)).apply(this, arguments));
  }

  _createClass(Mbtn, [{
    key: 'render',
    value: function render() {
      var color = (0, _helpers.defineColor)(this.props);

      var iconClassName = (0, _helpers.defineIconClass)(this.props);
      var content = (0, _helpers.defineContent)(this.props);
      var fontWeigth = (0, _helpers.defineFontWeight)(this.props);
      var shadowColorLight = this.context.bg.shadow.light;
      var shadowColorDark = this.context.bg.shadow.dark;
      var textColor = (0, _helpers.defineTextColor)(this.props, this.context.bg.color);

      var buttonType = this.props.icon ? _IconButton2.default : _StandardButton2.default;

      var Mbtn = (0, _styledComponents2.default)(buttonType)(_templateObject, fontWeigth, color, textColor, shadowColorLight, color, shadowColorDark, shadowColorLight, shadowColorDark, shadowColorLight, color);

      return _react2.default.createElement(
        Mbtn,
        { className: iconClassName, 'aria-hidden': 'true' },
        content
      );
    }
  }]);

  return Mbtn;
}(_react.Component);

exports.default = Mbtn;


Mbtn.contextTypes = {
  bg: _propTypes2.default.object
};