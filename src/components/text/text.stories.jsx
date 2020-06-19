import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { Text } from './text'

export default {
  title: 'Text',
  decorators: [withKnobs],
}

const fontSizeOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p1', 'p2']
export const Component = () => <Text fontSize="h1">Hello there</Text>
