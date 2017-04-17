'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defineIconClass = function defineIconClass(_ref) {
  var icon = _ref.icon,
      iconClass = _ref.iconClass;

  if (icon && iconClass) {
    return iconClass;
  } else if (icon) {
    return 'material-icons';
  } else {
    return '';
  }
};

exports.default = defineIconClass;