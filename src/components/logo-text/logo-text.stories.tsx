import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import { LogoText } from './logo-text'

export default {
  title: 'LogoText',
  decorators: [withKnobs],
}

export const Component = () => (
  <LogoText width={number('width', 296)} height={number('height', 35)} />
)
