'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diametre = exports.baseRadius = exports.spacing = exports.fontSize = exports.fontSizeValue = exports.font = undefined;

var _styleConfig = require('../config/styleConfig');

var font = exports.font = _styleConfig.fontConfig;

// Font Size
var fontSizeValue = exports.fontSizeValue = {
  heading1: _styleConfig.fontSizeConfig.heading1,
  heading2: _styleConfig.fontSizeConfig.heading2,
  heading3: _styleConfig.fontSizeConfig.heading3,
  heading4: _styleConfig.fontSizeConfig.heading4,

  bodyHuge: _styleConfig.fontSizeConfig.bodyHuge,
  bodyBig: _styleConfig.fontSizeConfig.bodyBig,
  body: _styleConfig.fontSizeConfig.body,
  bodySmall: _styleConfig.fontSizeConfig.bodySmall,
  bodyTiny: _styleConfig.fontSizeConfig.bodyTiny,

  rem: {
    huge: _styleConfig.fontSizeConfig.rem.huge,
    big: _styleConfig.fontSizeConfig.rem.big,
    base: _styleConfig.fontSizeConfig.rem.base,
    small: _styleConfig.fontSizeConfig.rem.small,
    tiny: _styleConfig.fontSizeConfig.rem.tiny
  }
};

var fontSize = exports.fontSize = {
  heading1: _styleConfig.fontSizeConfig.heading1 + 'px',
  heading2: _styleConfig.fontSizeConfig.heading2 + 'px',
  heading3: _styleConfig.fontSizeConfig.heading3 + 'px',
  heading4: _styleConfig.fontSizeConfig.heading4 + 'px',

  bodyHuge: _styleConfig.fontSizeConfig.bodyHuge + 'px',
  bodyBig: _styleConfig.fontSizeConfig.bodyBig + 'px',
  body: _styleConfig.fontSizeConfig.body + 'px',
  bodySmall: _styleConfig.fontSizeConfig.bodySmall + 'px',
  bodyTiny: _styleConfig.fontSizeConfig.bodyTiny + 'px',

  rem: {
    huge: _styleConfig.fontSizeConfig.rem.huge + 'rem',
    big: _styleConfig.fontSizeConfig.rem.big + 'rem',
    base: _styleConfig.fontSizeConfig.rem.base + 'rem',
    small: _styleConfig.fontSizeConfig.rem.small + 'rem',
    tiny: _styleConfig.fontSizeConfig.rem.tiny + 'rem'
  }
};

var spacing = exports.spacing = {
  base: _styleConfig.baseSpacingConfig + 'px',
  small: Math.round(_styleConfig.baseSpacingConfig / 2) + 'px',
  tiny: Math.round(_styleConfig.baseSpacingConfig / 4) + 'px',
  big: Math.round(_styleConfig.baseSpacingConfig * 2) + 'px',
  huge: Math.round(_styleConfig.baseSpacingConfig * 4) + 'px'

};

// Radius
var baseRadius = exports.baseRadius = _styleConfig.baseRadiusConfig + 'px';

// diametre
var diametre = exports.diametre = {
  base: _styleConfig.diametreConfig.base + 'rem',
  small: _styleConfig.diametreConfig.small + 'rem',
  big: _styleConfig.diametreConfig.big + 'rem'
};