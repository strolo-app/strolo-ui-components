import React from 'react'
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs'

import { Textarea } from './textarea'

export default {
  title: 'Textarea ',
  decorators: [withKnobs],
}

export const Component = () => (
  <Textarea
    rows={number('rows', 3)}
    disabled={boolean('disabled', false)}
    placeholder="Text Area Input"
    error={text('error', '')}
    helperText={text('helperText', 'This is some helper text.')}
  />
)
