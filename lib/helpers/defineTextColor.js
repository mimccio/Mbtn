'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorPalette = require('../config/colorPalette');

var _colorPalette2 = _interopRequireDefault(_colorPalette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineTextColor = function defineTextColor(props, backgroundColor) {
  if (props.textColor) {
    if (props.textColor === 'primary' || props.textColor === 'info' || props.textColor === 'warning' || props.textColor === 'success' || props.textColor === 'danger' || props.textColor === 'grey') {
      if (props.textNuance === 'main' || props.textNuance === 'light' || props.textNuance === 'lighter' || props.textNuance === 'dark' || props.textNuance === 'darker') {
        return _colorPalette2.default[props.textColor][props.textNuance];
      } else {
        return _colorPalette2.default[props.textColor]['main'];
      }
    } else {
      return props.textColor;
    }
  } else if (backgroundColor) {
    return backgroundColor;
  } else {
    return _colorPalette2.default.grey.main;
  }
};

exports.default = defineTextColor;