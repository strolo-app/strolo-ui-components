import React from 'react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

import { Button, OutlinedButton } from '.'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

const variantOptions = ['tiny', 'small', 'normal', 'large', 'huge']
const colorOptions = ['primary', 'energy', 'health', 'calm']

export const ButtonStory = () => (
  <Button
    variant={select('variant', variantOptions, 'normal')}
    color={select('color', colorOptions, 'primary')}
    fullWidth={boolean('fullWidth', false)}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    onClick={() => console.log('CLICKED')}
  >
    Button
  </Button>
)

export const OutlinedButtonStory = () => (
  <OutlinedButton
    variant={select('variant', variantOptions, 'normal')}
    fullWidth={boolean('fullWidth', false)}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
  >
    OutlinedButton
  </OutlinedButton>
)
