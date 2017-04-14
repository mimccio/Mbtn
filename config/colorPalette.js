// === Color palette ===
// Material color Palette : https://material.io/guidelines/style/color.html#color-color-palette

const primary = '#673ab7' // DeepPurple500
const primaryLight = '#9575CD '// DeepPurple300
const primaryLighter = '#D1C4E9' // DeepPurple100
const primaryDark = '#4527A0' // DeepPurple800
const primaryDarker = '#311B92' // DeepPurple900

const primaryAccent = '#651FFF' // DeepPurpleA400
const primaryAccentLight = '#7C4DFF' // DeepPurpleA200
const primaryAccentDark = '#6200EA' // DeepPurpleA700

const info = '#009688' // Teal500
const infoLight = '#4DB6AC '// Teal300
const infoLighter = '#B2DFDB' // Teal100
const infoDark = '#00695C' // Teal800
const infoDarker = '#004D40' // Teal900

const infoAccent = '#1DE9B6' // TealA400
const infoAccentLight = '#64FFDA' // TealA200
const infoAccentDark = '#00BFA5' // TealA700

const warning = '#FF5722' // DeepOrange500
const warningLight = '#FF8A65 '// DeepOrange300
const warningLighter = '#FFCCBC' // DeepOrange100
const warningDark = '#D84315' // DeepOrange800
const warningDarker = '#BF360C' // DeepOrange900

const warningAccent = '#FF3D00' // DeepOrangeA400
const warningAccentLight = '#FF6E40' // DeepOrangeA200
const warningAccentDark = '#DD2C00' // DeepOrangeA700

const success = '#4CAF50' // Green500
const successLight = '#81C784 '// Green300
const successLighter = '#C8E6C9 '// Green100
const successDark = '#2E7D32' // Green800
const successDarker = '#1B5E20' // Green900

const successAccent = '#00E676' // GreenA400
const successAccentLight = '#69F0AE' // GreenA200
const successAccentDark = '#00C853' // GreenA700

const danger = '#F44336' // Red500
const dangerLight = '#E57373 '// Red300
const dangerLighter = '#FFCDD2 '// Red100
const dangerDark = '#C62828' // Red800
const dangerDarker = '#B71C1C' // Red890

const dangerAccent = '#FF1744' // RedA400
const dangerAccentLight = '#FF5252' // RedA200
const dangerAccentDark = '#D50000' // RedA700

const grey = '#607D8B' // BlueGrey500
const greyLight = '#90A4AE' // BlueGrey300
const greyLighter = '#CFD8DC' // BlueGrey100
const greyDark = '#37474F' // BlueGrey800
const greyDarker = '#263238' // BlueGrey900

const palette = {
  primary: {
    name: 'Primary',
    main: primary,
    light: primaryLight,
    lighter: primaryLighter,
    dark: primaryDark,
    darker: primaryDarker,
    accent: {
      main: primaryAccent,
      light: primaryAccentLight,
      dark: primaryAccentDark
    }
  },
  info: {
    name: 'Info',
    main: info,
    light: infoLight,
    lighter: infoLighter,
    dark: infoDark,
    darker: infoDarker,
    accent: {
      main: infoAccent,
      light: infoAccentLight,
      dark: infoDark
    }
  },
  warning: {
    name: 'Warning',
    main: warning,
    light: warningLight,
    lighter: warningLighter,
    dark: warningDark,
    darker: warningDarker,
    accent: {
      main: warningAccent,
      light: warningAccentLight,
      dark: warningAccentDark,
    }
  },
  success: {
    name: 'Success',
    main: success,
    light: successLight,
    lighter: successLighter,
    dark: successDark,
    darker: successDarker,
    accent: {
      main: successAccent,
      light: successAccentLight,
      dark: successAccentDark,
    }
  },
  danger: {
    name: 'Danger',
    main: danger,
    light: dangerLight,
    lighter: dangerLighter,
    dark: dangerDark,
    darker: dangerDarker,
    accent: {
      main: dangerAccent,
      light: dangerAccentLight,
      dark: dangerAccentDark,
    }
  },
  grey: {
    name: 'Grey',
    main: grey,
    light: greyLight,
    lighter: greyLighter,
    dark: greyDark,
    darker: greyDarker,
  }
}

export default palette
