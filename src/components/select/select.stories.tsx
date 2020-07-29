import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { Select } from './select'

export default {
  title: 'Select ',
  decorators: [withKnobs],
}

export const Component = () => (
  <Select onChange={() => 'hey'}>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
)
