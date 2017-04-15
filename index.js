// import color palette
import palette from './config/colorPalette'

// import font family
import { font } from './config/styleConfig'

// import styles settings
import {
  fontSizeValue,
  fontSize,
  spacing,
  baseRadius,
  diametre
} from './settings/styleSettings'

// import background color function
import setBackground from './settings/backgroundSettings'

// import Mbtn
import Mbtn from './button/Mbtn'

// export everything
export default Mbtn
export {
  palette,
  font,
  fontSizeValue,
  fontSize,
  spacing,
  baseRadius,
  diametre,
  setBackground
}
