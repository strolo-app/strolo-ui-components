// import { DefaultTheme } from 'styled-components'
import { lighten } from 'polished'
import { baseFontSize, webTypeScale, mobileTypeScale } from './typography'

const yellow = { 30: '#FFD600' }
const blue = { 30: '#00E4F2' }
const red = { 30: '#FE1C5F' }

const gray = {
  60: '#000',
  50: '#444A53',
  45: '#72757E',
  40: '#888B91',
  30: '#CCCDD0',
  20: '#EEEEEF',
  10: '#FAFAFA',
  0: '#fff',
}

// const customMediaQuery = (maxWidth: number) =>
//   `@media (max-width: ${maxWidth}px)`;
// const media = {
//   custom: customMediaQuery,
//   desktop: customMediaQuery(922),
//   tablet: customMediaQuery(768),
//   phone: customMediaQuery(576),
// };
// const Content = styled.div`
//   height: 3em;
//   width: 3em;
//   background: papayawhip;
//   /* Now we have our methods on media and can use them instead of raw queries */
//   ${media.desktop} {
//     background: dodgerblue;
//   }
//   ${media.tablet} {
//     background: mediumseagreen;
//   }
//   ${media.phone} {
//     background: palevioletred;
//   }
// `;

export const defaultTheme = {
  palette: {
    energy: {
      light: lighten(0.2, yellow[30]),
      main: yellow[30],
      contrastText: gray[60],
    },
    calm: {
      main: blue[30],
      contrastText: gray[60],
    },
    health: {
      main: red[30],
      contrastText: gray[60],
    },
    primary: {
      light: lighten(0.2, gray[60]),
      main: gray[60],
      contrastText: gray[0],
    },

    gray: {
      ...gray,
    },
  },

  typography: {
    baseFontSize: baseFontSize,
    typeScale: {
      web: webTypeScale,
      mobile: mobileTypeScale,
    },
  },

  elevation: {
    0: 'box-shadow: none;',
    1: `box-shadow: 0px 1px 0px ${gray[30]};`,
  },
}

declare module 'styled-components' {
  type Theme = typeof defaultTheme
  export interface DefaultTheme extends Theme {}
}
