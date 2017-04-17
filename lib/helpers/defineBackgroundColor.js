'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorPalette = require('../config/colorPalette');

var _colorPalette2 = _interopRequireDefault(_colorPalette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineDefaultBackgroundColor = function defineDefaultBackgroundColor(defaultBackground) {
  if (defaultBackground.color) {
    if (defaultBackground.nuance) {
      return _colorPalette2.default[defaultBackground.color][defaultBackground.nuance];
    } else {
      return _colorPalette2.default[defaultBackground.color]['lighter'];
    }
  } else {
    return _colorPalette2.default.grey.lighter;
  }
};

var defineBackgroundColor = function defineBackgroundColor(color, nuance, defaultBackground) {
  if (color === 'primary' || color === 'info' || color === 'warning' || color === 'success' || color === 'danger' || color === 'grey') {
    if (nuance === 'main' || nuance === 'light' || nuance === 'lighter' || nuance === 'dark' || nuance === 'darker') {
      return _colorPalette2.default[color][nuance];
    } else {
      return _colorPalette2.default[color]['lighter'];
    }
  } else {
    return defineDefaultBackgroundColor(defaultBackground);
  }
};

exports.default = defineBackgroundColor;