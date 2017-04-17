'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorPalette = require('../config/colorPalette');

var _colorPalette2 = _interopRequireDefault(_colorPalette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineColorPalette = function defineColorPalette(props) {
  if (props.primary) {
    return _colorPalette2.default.primary;
  } else if (props.info) {
    return _colorPalette2.default.info;
  } else if (props.warning) {
    return _colorPalette2.default.warning;
  } else if (props.success) {
    return _colorPalette2.default.success;
  } else if (props.danger) {
    return _colorPalette2.default.danger;
  } else if (props.grey) {
    return _colorPalette2.default.grey;
  } else {
    return _colorPalette2.default.grey;
  }
};

var defineNuance = function defineNuance(props) {
  if (props.main) {
    return 'main';
  } else if (props.light) {
    return 'light';
  } else if (props.lighter) {
    return 'lighter';
  } else if (props.dark) {
    return 'dark';
  } else if (props.darker) {
    return 'darker';
  } else {
    return 'main';
  }
};

var defineColor = function defineColor(props) {
  var colorPalette = defineColorPalette(props);
  var nuance = defineNuance(props);
  var color = _colorPalette2.default.grey.main;

  if (props.color) {
    color = props.color;

    return color;
  } else if (!colorPalette) {
    colorPalette = _colorPalette2.default.grey;
  } else if (props.accent && colorPalette) {
    var accentColorPalette = colorPalette.accent;
    if (props.light) {
      color = accentColorPalette.light;
    } else if (props.dark) {
      color = accentColorPalette.dark;
    } else {
      color = accentColorPalette.main;
    }
    return color;
  } else if (nuance === 'darker') {
    nuance = 'dark';
  }
  color = colorPalette[nuance];
  return color;
};

exports.default = defineColor;