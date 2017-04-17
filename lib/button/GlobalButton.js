'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\n  box-sizing: border-box;\n  text-decoration: none;\n  position: relative;\n  margin: 3px;\n\n  &:hover {\n    background-color: transparent;\n    cursor: pointer;\n    box-shadow: none;\n  }\n\n  &:after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    border: solid 2px;\n    border-color: transparent;\n    transform: scale(.7);\n    transition:\n      transform .2s ease;\n  }\n\n  &:hover:after {\n    transform: scale(1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active:after {\n    transform: scale(1.1);\n  }\n\n  @media (min-width:641px) {\n\t\tmargin: 5px;\n  }\n\n  @media (min-width:881px) {\n\t\tmargin: 8px;\n\n    &:after {\n      border-width: 3px;\n      top: -3px;\n      left: -3px;\n    }\n  }\n'], ['\n\n  box-sizing: border-box;\n  text-decoration: none;\n  position: relative;\n  margin: 3px;\n\n  &:hover {\n    background-color: transparent;\n    cursor: pointer;\n    box-shadow: none;\n  }\n\n  &:after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    border: solid 2px;\n    border-color: transparent;\n    transform: scale(.7);\n    transition:\n      transform .2s ease;\n  }\n\n  &:hover:after {\n    transform: scale(1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active:after {\n    transform: scale(1.1);\n  }\n\n  @media (min-width:641px) {\n\t\tmargin: 5px;\n  }\n\n  @media (min-width:881px) {\n\t\tmargin: 8px;\n\n    &:after {\n      border-width: 3px;\n      top: -3px;\n      left: -3px;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalButton = _styledComponents2.default.button(_templateObject);

exports.default = GlobalButton;