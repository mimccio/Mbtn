'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineShadowColorDark = exports.defineShadowColorLight = undefined;

var _colorPalette = require('../config/colorPalette');

var _colorPalette2 = _interopRequireDefault(_colorPalette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineShadowNuanceLight = function defineShadowNuanceLight(nuance) {
  if (nuance === 'lighter') {
    return 'light';
  } else if (nuance === 'light') {
    return 'main';
  } else if (nuance === 'main') {
    return 'dark';
  } else if (nuance === 'dark') {
    return 'darker';
  } else if (nuance === 'darker') {
    return 'darker';
  } else {
    return 'lighter';
  }
};

var defineShadowNuanceDark = function defineShadowNuanceDark(nuance) {
  if (nuance === 'lighter') {
    return 'light';
  } else if (nuance === 'main') {
    return 'main';
  } else if (nuance === 'dark') {
    return 'dark';
  } else if (nuance === 'darker') {
    return 'darker';
  } else if (nuance === 'darker') {
    return 'darker';
  } else {
    return 'light';
  }
};

var defineShadowColorLight = function defineShadowColorLight(color, nuance) {
  var shadowNuanceLight = defineShadowNuanceLight(nuance);
  var shadowColorLight = color ? _colorPalette2.default[color][shadowNuanceLight] : _colorPalette2.default.grey.light;
  return shadowColorLight;
};

var defineShadowColorDark = function defineShadowColorDark(color, nuance) {
  var shadowNuanceDark = defineShadowNuanceDark(nuance);
  var shadowColorDark = color ? _colorPalette2.default[color][shadowNuanceDark] : _colorPalette2.default.grey.light;
  return shadowColorDark;
};

exports.defineShadowColorLight = defineShadowColorLight;
exports.defineShadowColorDark = defineShadowColorDark;