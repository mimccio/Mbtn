'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defineContent = function defineContent(_ref) {
  var icon = _ref.icon,
      iconClass = _ref.iconClass,
      content = _ref.content;

  if (icon && iconClass) {
    return '';
  } else {
    return content;
  }
};

exports.default = defineContent;