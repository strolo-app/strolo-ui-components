import React from 'react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

import { Button, OutlinedButton } from '.'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

const sizeOptions = ['tiny', 'small', 'normal', 'large', 'huge']
const colorOptions = ['primary', 'energy', 'health', 'calm']

export const ButtonStory = () => (
  <Button
    size={select('size', sizeOptions, 'normal')}
    color={select('color', colorOptions, 'primary')}
    fullWidth={boolean('fullWidth', false)}
    disabled={boolean('disabled', false)}
  >
    Button
  </Button>
)

export const OutlinedButtonStory = () => (
  <OutlinedButton
    size={select('size', sizeOptions, 'normal')}
    fullWidth={boolean('fullWidth', false)}
    disabled={boolean('disabled', false)}
  >
    OutlinedButton
  </OutlinedButton>
)
