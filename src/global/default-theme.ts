import { lighten } from 'polished'

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

  elevation: {
    0: 'box-shadow: none;',
    1: `box-shadow: 0px 1px 0px ${gray[30]}`,
  },
}
