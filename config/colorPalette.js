// === Color palette ===
// Material color Palette : https://material.io/guidelines/style/color.html#color-color-palette

const primary = '#673ab7' // DeepPurple500
const primaryLight = '#9575cd '// DeepPurple300
const primaryLighter = '#d1C4e9' // DeepPurple100
const primaryDark = '#4527a0' // DeepPurple800
const primaryDarker = '#311b92' // DeepPurple900

const primaryAccent = '#651fff' // DeepPurpleA400
const primaryAccentLight = '#7c4dff' // DeepPurpleA200
const primaryAccentDark = '#6200ea' // DeepPurpleA700

const info = '#009688' // Teal500
const infoLight = '#4db6ac '// Teal300
const infoLighter = '#b2dfbd' // Teal100
const infoDark = '#00695c' // Teal800
const infoDarker = '#004d40' // Teal900

const infoAccent = '#1De9b6' // TealA400
const infoAccentLight = '#64ffda' // TealA200
const infoAccentDark = '#00Bfa5' // TealA700

const warning = '#ff5722' // DeepOrange500
const warningLight = '#ff8a65 '// DeepOrange300
const warningLighter = '#ffccbc' // DeepOrange100
const warningDark = '#d84315' // DeepOrange800
const warningDarker = '#bf360c' // DeepOrange900

const warningAccent = '#ff3d00' // DeepOrangeA400
const warningAccentLight = '#ff6e40' // DeepOrangeA200
const warningAccentDark = '#dd2c00' // DeepOrangeA700

const success = '#4caf50' // Green500
const successLight = '#81c784 '// Green300
const successLighter = '#c8e6c9 '// Green100
const successDark = '#2e7d32' // Green800
const successDarker = '#1b5e20' // Green900

const successAccent = '#00e676' // GreenA400
const successAccentLight = '#69f0ae' // GreenA200
const successAccentDark = '#00c853' // GreenA700

const danger = '#f44336' // Red500
const dangerLight = '#e57373 '// Red300
const dangerLighter = '#ffcdd2 '// Red100
const dangerDark = '#c62828' // Red800
const dangerDarker = '#b71c1c' // Red890

const dangerAccent = '#ff1744' // RedA400
const dangerAccentLight = '#ff5252' // RedA200
const dangerAccentDark = '#d50000' // RedA700

const grey = '#607d8b' // BlueGrey500
const greyLight = '#90a4ae' // BlueGrey300
const greyLighter = '#cfd8dc' // BlueGrey100
const greyDark = '#37474f' // BlueGrey800
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
      dark: infoAccentDark
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
      dark: warningAccentDark
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
      dark: successAccentDark
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
      dark: dangerAccentDark
    }
  },
  grey: {
    name: 'Grey',
    main: grey,
    light: greyLight,
    lighter: greyLighter,
    dark: greyDark,
    darker: greyDarker
  }
}

export default palette
