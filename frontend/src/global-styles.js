// @flow

import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${styledNormalize}

  html,
  body,
  #root {
    box-sizing: border-box;

    height: 100%;
    min-height: 100%;

    font-family: 'Arial', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .mdi-icon {
    vertical-align: middle;
  }
`
