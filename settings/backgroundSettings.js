import defaultBackgroundConfig from '../config/backgroundConfig'
import {
  defineBackgroundColor,
  defineShadowColorLight,
  defineShadowColorDark
} from '../helpers'

const setBackground = (color, nuance) => {
  const bgColor = defineBackgroundColor(color, nuance, defaultBackgroundConfig)
  const shadowLight = defineShadowColorLight(color, nuance)
  const shadowDark = defineShadowColorDark(color, nuance)
  return {
    color: bgColor,
    shadow: {
      light: shadowLight,
      dark: shadowDark
    }
  }
}

export default setBackground
