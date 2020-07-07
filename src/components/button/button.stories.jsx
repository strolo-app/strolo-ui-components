import React from 'react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

import { Button } from '.'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

const sizeOptions = ['tiny', 'small', 'normal', 'large', 'huge']
const colorOptions = ['primary', 'energy']
const variantOptions = ['contained', 'outlined', 'text']

export const Component = () => (
  <Button
    size={select('size', sizeOptions, 'normal')}
    color={select('color', colorOptions, 'primary')}
    fullWidth={boolean('fullWidth', false)}
    variant={select('variant', variantOptions, 'containd')}
  >
    Button
  </Button>
)
