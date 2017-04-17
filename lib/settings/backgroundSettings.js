'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backgroundConfig = require('../config/backgroundConfig');

var _backgroundConfig2 = _interopRequireDefault(_backgroundConfig);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setBackground = function setBackground(color, nuance) {
  var bgColor = (0, _helpers.defineBackgroundColor)(color, nuance, _backgroundConfig2.default);
  var shadowLight = (0, _helpers.defineShadowColorLight)(color, nuance);
  var shadowDark = (0, _helpers.defineShadowColorDark)(color, nuance);
  return {
    color: bgColor,
    shadow: {
      light: shadowLight,
      dark: shadowDark
    }
  };
};

exports.default = setBackground;