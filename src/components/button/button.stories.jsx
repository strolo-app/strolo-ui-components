import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { Button } from '.'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

const sizeOptions = ['tiny', 'small', 'normal', 'large', 'huge']
const colorOptions = ['primary', 'energy']

export const Component = () => (
  <Button
    size={select('size', sizeOptions, 'normal')}
    color={select('color', colorOptions, 'primary')}
  >
    Button
  </Button>
)
