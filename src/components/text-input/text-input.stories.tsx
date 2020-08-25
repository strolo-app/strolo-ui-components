import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { TextInput } from './text-input'

export default {
  title: 'TextInput ',
  decorators: [withKnobs],
}

export const Component = () => (
  <TextInput placeholder="Placeholder" error={boolean('error', false)} />
)
