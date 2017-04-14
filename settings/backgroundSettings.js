import defaultBackgroundConfig from '../config/backgroundConfig'
import {
  defineBackgroundColor,
  defineShadowColorLight,
  defineShadowColorDark
} from '../helpers'

const bg = (color, nuance) => {
  const bgColor = defineBackgroundColor(color, nuance, defaultBackgroundConfig)
  const shadowLight = defineShadowColorLight(color, nuance)
  const shadowDark = defineShadowColorDark(color, nuance)
  console.log(color, nuance)
  return {
    color: bgColor,
    shadow: {
      light: shadowLight,
      dark: shadowDark
    }
  }
}

export default bg
