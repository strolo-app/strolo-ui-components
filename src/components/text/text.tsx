import React from 'react'
import styled from 'styled-components'

export interface TextProps {
  as?: React.ElementType
  fontSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2'
  textAlign?: 'left' | 'center' | 'right' | 'inherit'
}

const Component = styled.p.attrs((props: TextProps) => ({
  fontSize: props.fontSize,
  textAlign: props.textAlign,
}))`
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme, fontSize }) => fontSize && `font-size: ${theme.typography.typeScale.web[fontSize]};`}
`

export const Text: React.FC<TextProps> = React.forwardRef(({ ...props }, ref) => {
  return <Component ref={ref} {...props} />
})
