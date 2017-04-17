'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBackground = exports.diametre = exports.baseRadius = exports.spacing = exports.fontSize = exports.fontSizeValue = exports.font = exports.palette = undefined;

var _colorPalette = require('./config/colorPalette');

var _colorPalette2 = _interopRequireDefault(_colorPalette);

var _styleSettings = require('./settings/styleSettings');

var _backgroundSettings = require('./settings/backgroundSettings');

var _backgroundSettings2 = _interopRequireDefault(_backgroundSettings);

var _Mbtn = require('./button/Mbtn');

var _Mbtn2 = _interopRequireDefault(_Mbtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export everything


// import background color function


// import font family
exports.default = _Mbtn2.default;

// import Mbtn


// import styles settings
// import color palette

exports.palette = _colorPalette2.default;
exports.font = _styleSettings.font;
exports.fontSizeValue = _styleSettings.fontSizeValue;
exports.fontSize = _styleSettings.fontSize;
exports.spacing = _styleSettings.spacing;
exports.baseRadius = _styleSettings.baseRadius;
exports.diametre = _styleSettings.diametre;
exports.setBackground = _backgroundSettings2.default;