import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { TextInput } from './text-input'

export default {
  title: 'TextInput ',
  decorators: [withKnobs],
}

export const Component = () => (
  <TextInput
    placeholder="Placeholder"
    disabled={boolean('disabled', false)}
    error={text('error', '')}
    helperText={text('helperText', 'This is some helper text.')}
  />
)
