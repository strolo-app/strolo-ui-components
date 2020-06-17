import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/global/default-theme'

export const contexts = [
  {
    icon: 'box',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      { name: 'Default Theme', props: { theme: defaultTheme, default: true } },
      { name: 'Dark Theme', props: { theme: defaultTheme } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
]
