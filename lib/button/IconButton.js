'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  height: ', ';\n  width: ', ';\n  border-radius: 50%;\n  transition:\n    transform .5s ease;\n\n  &:hover {\n    transform: rotate(', ');\n  }\n  \n  &:before {\n    border-radius: 50%;\n  }\n\n  &:after {\n    border-radius: 50%;\n  }\n\n\n\n  @media (min-width:641px) {\n    font-size: ', ';\n    width: ', ';\n    height: ', ';\n  }\n\n  @media (min-width:881px) {\n    font-size: ', ';\n    width: ', ';\n    height: ', ';\n  }\n'], ['\n  font-size: ', ';\n  height: ', ';\n  width: ', ';\n  border-radius: 50%;\n  transition:\n    transform .5s ease;\n\n  &:hover {\n    transform: rotate(', ');\n  }\n  \n  &:before {\n    border-radius: 50%;\n  }\n\n  &:after {\n    border-radius: 50%;\n  }\n\n\n\n  @media (min-width:641px) {\n    font-size: ', ';\n    width: ', ';\n    height: ', ';\n  }\n\n  @media (min-width:881px) {\n    font-size: ', ';\n    width: ', ';\n    height: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleSettings = require('../settings/styleSettings');

var _GlobalButton = require('./GlobalButton');

var _GlobalButton2 = _interopRequireDefault(_GlobalButton);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotationDirection = (0, _helpers.defineRotationDirection)(1, 3) === 1 ? '-45deg' : '45deg';

var IconButton = (0, _styledComponents2.default)(_GlobalButton2.default)(_templateObject, _styleSettings.fontSize.rem.small, _styleSettings.diametre.small, _styleSettings.diametre.small, rotationDirection, _styleSettings.fontSize.rem.base, _styleSettings.diametre.base, _styleSettings.diametre.base, _styleSettings.fontSize.rem.big, _styleSettings.diametre.big, _styleSettings.diametre.big);
exports.default = IconButton;