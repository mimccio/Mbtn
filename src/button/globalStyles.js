import { injectGlobal } from 'styled-components'

// eslint-disable-next-line
injectGlobal`

  html {
  box-sizing: content-box;
  }

  * {
  box-sizing: inherit;
  }

  *::before, ::after {
  box-sizing: inherit;
  }

`
