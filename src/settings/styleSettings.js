import { fontSizeConfig, baseSpacingConfig, baseRadiusConfig, diametreConfig } from '../config/styleConfig'

// Font Size
export const fontSizeValue = {
  heading1: fontSizeConfig.heading1,
  heading2: fontSizeConfig.heading2,
  heading3: fontSizeConfig.heading3,
  heading4: fontSizeConfig.heading4,

  bodyHuge: fontSizeConfig.bodyHuge,
  bodyBig: fontSizeConfig.bodyBig,
  body: fontSizeConfig.body,
  bodySmall: fontSizeConfig.bodySmall,
  bodyTiny: fontSizeConfig.bodyTiny,

  rem: {
    huge: fontSizeConfig.rem.huge,
    big: fontSizeConfig.rem.big,
    base: fontSizeConfig.rem.base,
    small: fontSizeConfig.rem.small,
    tiny: fontSizeConfig.rem.tiny
  }
}

export const fontSize = {
  heading1: `${fontSizeConfig.heading1}px`,
  heading2: `${fontSizeConfig.heading2}px`,
  heading3: `${fontSizeConfig.heading3}px`,
  heading4: `${fontSizeConfig.heading4}px`,

  bodyHuge: `${fontSizeConfig.bodyHuge}px`,
  bodyBig: `${fontSizeConfig.bodyBig}px`,
  body: `${fontSizeConfig.body}px`,
  bodySmall: `${fontSizeConfig.bodySmall}px`,
  bodyTiny: `${fontSizeConfig.bodyTiny}px`,

  rem: {
    huge: `${fontSizeConfig.rem.huge}rem`,
    big: `${fontSizeConfig.rem.big}rem`,
    base: `${fontSizeConfig.rem.base}rem`,
    small: `${fontSizeConfig.rem.small}rem`,
    tiny: `${fontSizeConfig.rem.tiny}rem`
  }
}

export const spacing = {
  base: `${baseSpacingConfig}px`,
  small: `${Math.round(baseSpacingConfig / 2)}px`,
  tiny: `${Math.round(baseSpacingConfig / 4)}px`,
  big: `${Math.round(baseSpacingConfig * 2)}px`,
  huge: `${Math.round(baseSpacingConfig * 4)}px`

}

// Radius
export const baseRadius = `${baseRadiusConfig}px`

// diametre
export const diametre = {
  base: `${diametreConfig.base}rem`,
  small: `${diametreConfig.small}rem`,
  big: `${diametreConfig.big}rem`
}
