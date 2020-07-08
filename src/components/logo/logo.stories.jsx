import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import { Logo } from './logo'

export default {
  title: 'Logo',
  decorators: [withKnobs],
}

export const Component = () => <Logo width={number('width', 50)} />
