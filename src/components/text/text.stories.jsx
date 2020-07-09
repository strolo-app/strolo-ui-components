import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { H1, H2, H3, H4, H5, H6, P1, P2, Text } from './text'

export default {
  title: 'Text',
  decorators: [withKnobs],
}

export const Component = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <H1 textAlign="left">Heading 1</H1>
    <H2 textAlign="left">Heading 2</H2>
    <H3 textAlign="left">Heading 3</H3>
    <H4 textAlign="left">Heading 4</H4>
    <H5 textAlign="left">Heading 5</H5>
    <H6 textAlign="left">Heading 6</H6>

    <br />

    <P1>Paragraph 1</P1>
    <P2>Paragraph 2</P2>

    <br />

    <Text color="gray50" fontWeight={400}>
      Text element with font weight 400
    </Text>
    <Text color="gray50" fontWeight={600}>
      Text element with font weight 600
    </Text>
    <Text color="gray50" fontWeight={700}>
      Text element with font weight 700
    </Text>
    <Text color="gray50" fontWeight={900}>
      Text element with font weight 900
    </Text>

    <br />

    <Text fontSize="1rem" color="gray50">
      Text element with custom font size 1rem
    </Text>
    <Text fontSize="2rem" color="gray50">
      Text element with custom font size 2rem
    </Text>
    <Text fontSize="3rem" color="gray50">
      Text element with custom font size 3rem
    </Text>

    <br />

    <P1 style={{ width: '300px' }}>
      By starting my Membership, I confirm that I have read and agree to the Strolo Terms of
      Service, Privacy Policy, and Membership Terms, and I authorize Strolo to charge my payment
      method for the monthly membership as described above.
    </P1>
  </div>
)
