import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import { Textarea } from './textarea'

export default {
  title: 'Textarea ',
  decorators: [withKnobs],
}

export const Component = () => <Textarea rows={number('rows', 3)} placeholder="Text Area Input" />
