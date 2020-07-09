import { lighten } from 'polished'
import { baseFontSize, webTypeScale, mobileTypeScale } from './typography'

const yellow = '#FFD600'
const blue = '#00E4F2'
const red = '#FE1C5F'

const colors = {
  energy30: yellow,
  energy20: lighten(0.2, yellow),

  calm30: blue,
  calm20: lighten(0.2, blue),

  health30: red,
  health20: lighten(0.2, red),

  gray60: '#000',
  gray50: '#444A53',
  gray45: '#72757E',
  gray40: '#888B91',
  gray30: '#CCCDD0',
  gray20: '#EEEEEF',
  gray10: '#FAFAFA',
  gray0: '#fff',
}

export type Color = keyof typeof colors

const customMaxMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`
const customMinMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`

export const defaultTheme = {
  colors,
  palette: {
    primary: {
      light: colors.gray50,
      main: colors.gray60,
      contrastText: colors.gray0,
    },
    energy: {
      light: colors.energy20,
      main: colors.energy30,
      contrastText: colors.gray60,
    },
    calm: {
      light: colors.calm20,
      main: colors.calm30,
      contrastText: colors.gray60,
    },
    health: {
      light: colors.health20,
      main: colors.health30,
      contrastText: colors.gray60,
    },
  },

  media: {
    customMax: customMaxMediaQuery,
    customMin: customMinMediaQuery,
    phoneOnly: customMaxMediaQuery(599),
    tabletPortraitUp: customMinMediaQuery(600),
    tabletLandscapeUp: customMinMediaQuery(900),
    tabletDesktopUp: customMinMediaQuery(1200),
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
    1: `box-shadow: 0px 1px 0px ${colors.gray30};`,
  },
}

declare module 'styled-components' {
  type Theme = typeof defaultTheme
  export interface DefaultTheme extends Theme {}
}
