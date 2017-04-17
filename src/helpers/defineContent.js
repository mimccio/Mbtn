const defineContent = ({icon, iconClass, content}) => {
  if (icon && iconClass) {
    return ''
  } else {
    return content
  }
}

export default defineContent
