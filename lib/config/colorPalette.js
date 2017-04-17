'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// === Color palette ===
// Material color Palette : https://material.io/guidelines/style/color.html#color-color-palette

var primary = '#673ab7'; // DeepPurple500
var primaryLight = '#9575cd '; // DeepPurple300
var primaryLighter = '#d1C4e9'; // DeepPurple100
var primaryDark = '#4527a0'; // DeepPurple800
var primaryDarker = '#311b92'; // DeepPurple900

var primaryAccent = '#651fff'; // DeepPurpleA400
var primaryAccentLight = '#7c4dff'; // DeepPurpleA200
var primaryAccentDark = '#6200ea'; // DeepPurpleA700

var info = '#009688'; // Teal500
var infoLight = '#4db6ac '; // Teal300
var infoLighter = '#b2dfbd'; // Teal100
var infoDark = '#00695c'; // Teal800
var infoDarker = '#004d40'; // Teal900

var infoAccent = '#1De9b6'; // TealA400
var infoAccentLight = '#64ffda'; // TealA200
var infoAccentDark = '#00Bfa5'; // TealA700

var warning = '#ff5722'; // DeepOrange500
var warningLight = '#ff8a65 '; // DeepOrange300
var warningLighter = '#ffccbc'; // DeepOrange100
var warningDark = '#d84315'; // DeepOrange800
var warningDarker = '#bf360c'; // DeepOrange900

var warningAccent = '#ff3d00'; // DeepOrangeA400
var warningAccentLight = '#ff6e40'; // DeepOrangeA200
var warningAccentDark = '#dd2c00'; // DeepOrangeA700

var success = '#4caf50'; // Green500
var successLight = '#81c784 '; // Green300
var successLighter = '#c8e6c9 '; // Green100
var successDark = '#2e7d32'; // Green800
var successDarker = '#1b5e20'; // Green900

var successAccent = '#00e676'; // GreenA400
var successAccentLight = '#69f0ae'; // GreenA200
var successAccentDark = '#00c853'; // GreenA700

var danger = '#f44336'; // Red500
var dangerLight = '#e57373 '; // Red300
var dangerLighter = '#ffcdd2 '; // Red100
var dangerDark = '#c62828'; // Red800
var dangerDarker = '#b71c1c'; // Red890

var dangerAccent = '#ff1744'; // RedA400
var dangerAccentLight = '#ff5252'; // RedA200
var dangerAccentDark = '#d50000'; // RedA700

var grey = '#607d8b'; // BlueGrey500
var greyLight = '#90a4ae'; // BlueGrey300
var greyLighter = '#cfd8dc'; // BlueGrey100
var greyDark = '#37474f'; // BlueGrey800
var greyDarker = '#263238'; // BlueGrey900

var palette = {
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
};

exports.default = palette;