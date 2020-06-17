import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import { contexts } from './contexts'
import { withA11y } from '@storybook/addon-a11y'
import { GlobalStyle } from '../src/global/global-styles'
import 'normalize.css'

addParameters({
  backgrounds: [
    { name: 'Default theme', value: '#FFF', default: true },
    { name: 'Dark theme', value: '#000' },
  ],
})

addDecorator(withA11y)
addDecorator(withContexts(contexts))
addDecorator((s) => (
  <>
    <GlobalStyle />
    {s()}
  </>
))
