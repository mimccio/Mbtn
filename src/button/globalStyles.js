import { injectGlobal } from 'styled-components'

// eslint-disable-next-line
injectGlobal`

  html {
  box-sizing: border-box;
  }

  * {
  box-sizing: inherit;
  }

  *::before, ::after {
  box-sizing: inherit;
  }

`
