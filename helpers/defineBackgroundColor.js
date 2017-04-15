import palette from '../config/colorPalette'

const defineDefaultBackgroundColor = (defaultBackground) => {
  if (defaultBackground.color) {
    if (defaultBackground.nuance) {
      return palette[defaultBackground.color][defaultBackground.nuance]
    } else {
      return palette[defaultBackground.color]['lighter']
    }
  } else {
    return palette.grey.lighter
  }
}

const defineBackgroundColor = (color, nuance, defaultBackground) => {
  if (
    color === 'primary'
    || color === 'info'
    || color === 'warning'
    || color === 'success'
    || color === 'danger'
    || color === 'grey'
  ) {
    if (
      nuance === 'main'
      || nuance === 'light'
      || nuance === 'lighter'
      || nuance === 'dark'
      || nuance === 'darker'
    ) {
      return palette[color][nuance]
    } else {
      return palette[color]['lighter']
    }
  } else {
    return defineDefaultBackgroundColor(defaultBackground)
  }
}

export default defineBackgroundColor
