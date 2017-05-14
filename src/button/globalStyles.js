import { injectGlobal } from 'styled-components'

// eslint-disable-next-line
injectGlobal`

  html {
  box-sizing: content-box;
  }

  * {
  box-sizing: content-box;
  }

  *::before, ::after {
  box-sizing: content-box;
  }

`
