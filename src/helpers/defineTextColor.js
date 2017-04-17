import palette from '../config/colorPalette'

const defineTextColor = (props, backgroundColor) => {
  if (props.textColor) {
    if (
      props.textColor === 'primary'
      || props.textColor === 'info'
      || props.textColor === 'warning'
      || props.textColor === 'success'
      || props.textColor === 'danger'
      || props.textColor === 'grey'
    ) {
      if (
          props.textNuance === 'main'
          || props.textNuance === 'light'
          || props.textNuance === 'lighter'
          || props.textNuance === 'dark'
          || props.textNuance === 'darker'
        ) {
        return palette[props.textColor][props.textNuance]
      } else {
        return palette[props.textColor]['main']
      }
    } else {
      return props.textColor
    }
  } else if (backgroundColor) {
    return backgroundColor
  } else {
    return palette.grey.main
  }
}

export default defineTextColor
