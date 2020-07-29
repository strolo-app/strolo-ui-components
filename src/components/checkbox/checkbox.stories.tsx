import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { Checkbox } from './checkbox'

export default {
  title: 'Checkbox ',
  decorators: [withKnobs],
}

export const Component = () => (
  <div>
    <Checkbox>Option 1</Checkbox>
    <Checkbox>Option 2</Checkbox>
    <Checkbox>Option 3</Checkbox>
  </div>
)
