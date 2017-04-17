'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  width: 4.2rem;\n  height: 1.6rem;\n  border-radius: ', ';\n  transition:\n    transform .2s ease;\n\n  &:hover {\n    transform: scale(1.1, 1);\n  }\n\n  &:before {\n    border-radius: ', ';\n  }\n\n  &:after {\n    border-radius: ', ';\n  }\n\n  @media (min-width:641px) {\n    font-size: ', ';\n\n    width: 6.8rem;\n    height: 2.4rem;\n\n    &:hover {\n      transform: scale(1.1, 1);\n    }\n\n  }\n\n  @media (min-width:881px) {\n    font-size: ', ';\n    padding: 2px;\n    width: 8rem;\n    height: 2.9rem;\n\n    &:hover {\n      transform: scale(1.1, 1);\n    }\n  }\n'], ['\n  font-size: ', ';\n  width: 4.2rem;\n  height: 1.6rem;\n  border-radius: ', ';\n  transition:\n    transform .2s ease;\n\n  &:hover {\n    transform: scale(1.1, 1);\n  }\n\n  &:before {\n    border-radius: ', ';\n  }\n\n  &:after {\n    border-radius: ', ';\n  }\n\n  @media (min-width:641px) {\n    font-size: ', ';\n\n    width: 6.8rem;\n    height: 2.4rem;\n\n    &:hover {\n      transform: scale(1.1, 1);\n    }\n\n  }\n\n  @media (min-width:881px) {\n    font-size: ', ';\n    padding: 2px;\n    width: 8rem;\n    height: 2.9rem;\n\n    &:hover {\n      transform: scale(1.1, 1);\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleSettings = require('../settings/styleSettings');

var _GlobalButton = require('./GlobalButton');

var _GlobalButton2 = _interopRequireDefault(_GlobalButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StandardButton = (0, _styledComponents2.default)(_GlobalButton2.default)(_templateObject, _styleSettings.fontSize.bodySmall, _styleSettings.baseRadius, _styleSettings.baseRadius, _styleSettings.baseRadius, _styleSettings.fontSize.body, _styleSettings.fontSize.bodyBig);
exports.default = StandardButton;