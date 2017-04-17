import palette from '../config/colorPalette'

const defineShadowNuanceLight = (nuance) => {
  if (nuance === 'lighter') {
    return 'light'
  } else if (nuance === 'light') {
    return 'main'
  } else if (nuance === 'main') {
    return 'dark'
  } else if (nuance === 'dark') {
    return 'darker'
  } else if (nuance === 'darker') {
    return 'darker'
  } else {
    return 'lighter'
  }
}

const defineShadowNuanceDark = (nuance) => {
  if (nuance === 'lighter') {
    return 'light'
  } else if (nuance === 'main') {
    return 'main'
  } else if (nuance === 'dark') {
    return 'dark'
  } else if (nuance === 'darker') {
    return 'darker'
  } else if (nuance === 'darker') {
    return 'darker'
  } else {
    return 'light'
  }
}

const defineShadowColorLight = (color, nuance) => {
  const shadowNuanceLight = defineShadowNuanceLight(nuance)
  const shadowColorLight = color ? palette[color][shadowNuanceLight] : palette.grey.light
  return shadowColorLight
}

const defineShadowColorDark = (color, nuance) => {
  const shadowNuanceDark = defineShadowNuanceDark(nuance)
  const shadowColorDark = color ? palette[color][shadowNuanceDark] : palette.grey.light
  return shadowColorDark
}

export { defineShadowColorLight, defineShadowColorDark }
