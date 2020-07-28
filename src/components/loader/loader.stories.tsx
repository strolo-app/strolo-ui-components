import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { Loader } from './loader'

export default {
  title: 'Loader ',
  decorators: [withKnobs],
}

export const Component = () => <Loader>children</Loader>
