const defineIconClass = ({icon, iconClass}) => {
  if (icon && iconClass) {
    return iconClass
  } else if (icon) {
    return 'material-icons'
  } else {
    return ''
  }
}

export default defineIconClass
