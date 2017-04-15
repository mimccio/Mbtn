import palette from '../config/colorPalette'

const defineColorPalette = (props) => {
  if (props.primary) {
    return palette.primary
  } else if (props.info) {
    return palette.info
  } else if (props.warning) {
    return palette.warning
  } else if (props.success) {
    return palette.success
  } else if (props.danger) {
    return palette.danger
  } else if (props.grey) {
    return palette.grey
  } else {
    return palette.grey
  }
}

const defineNuance = (props) => {
  if (props.main) {
    return 'main'
  } else if (props.light) {
    return 'light'
  } else if (props.lighter) {
    return 'lighter'
  } else if (props.dark) {
    return 'dark'
  } else if (props.darker) {
    return 'darker'
  } else {
    return 'main'
  }
}

const defineColor = (props) => {
  let colorPalette = defineColorPalette(props)
  let nuance = defineNuance(props)
  let color = palette.grey.main

  if (props.color) {
    color = props.color

    return color
  } else if (!colorPalette) {
    colorPalette = palette.grey
  } else if (props.accent && colorPalette) {
    const accentColorPalette = colorPalette.accent
    if (props.light) {
      color = accentColorPalette.light
    } else if (props.dark) {
      color = accentColorPalette.dark
    } else {
      color = accentColorPalette.main
    }
    return color
  } else if (nuance === 'darker') {
    nuance = 'dark'
  }
  color = colorPalette[nuance]
  return color
}

export default defineColor
