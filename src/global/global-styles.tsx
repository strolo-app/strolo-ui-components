import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { primaryFont, baseFontSize } from './typography'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    font-size: ${baseFontSize}
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: ${primaryFont};
    font-size: ${baseFontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
