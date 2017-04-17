'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defineFontWeight = function defineFontWeight(_ref) {
  var bold = _ref.bold;

  if (bold) {
    return 'bold';
  } else {
    return 'normal';
  }
};

exports.default = defineFontWeight;