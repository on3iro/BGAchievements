/**
 * These are globally applied css styles. Use those sparingly
 * and only when absolutely necessary. Usually component styles will do.
  */

import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: ${props => props.theme.primaryFont};
    font-size: 16px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.primaryFont};
  }

  body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  #root {
    background-color: #fafafa;
    height: 100%;
    min-height: 100%;
    min-width: 100%;

    & > div {
      height: 100%;
    }
  }

  ul {
    list-style: none;
  }

  p,
  label {
    line-height: 1.5em;
  }
`
