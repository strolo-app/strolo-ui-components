import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from './'

test('Renders', async () => {
  const { getByText } = render(<Button />)
  expect(getByText('Button')).toBeVisible()
})
