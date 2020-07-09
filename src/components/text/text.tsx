import styled from 'styled-components'
import { Color } from '../../global/default-theme'

export interface TextProps {
  fontWeight?: 400 | 600 | 700 | 900
  textAlign?:
    | 'center'
    | 'end'
    | 'inherit'
    | 'initial'
    | 'justify'
    | 'left'
    | 'right'
    | 'start'
    | 'unset'
  fontSize?: string
  lineHeight?: string
  color?: Color
  italic?: boolean
  textTransform?:
    | 'capitalize'
    | 'lowercase'
    | 'uppercase'
    | 'none'
    | 'inherit'
    | 'initial'
    | 'unset'
}

export const Text = styled.span<TextProps>`
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ italic }) => italic && `font-size: italic;`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
`

export const P1 = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.typography.typeScale.web.p1};
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => !!textAlign && `text-align: ${textAlign};`}
  ${({ theme }) => theme.media.phoneOnly} {
    font-size: ${({ theme }) => theme.typography.typeScale.mobile.p1};
  }
`

export const P2 = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.typography.typeScale.web.p2};
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme }) => theme.media.phoneOnly} {
    font-size: ${({ theme }) => theme.typography.typeScale.mobile.p2};
  }
`

export const H6 = styled.h6<TextProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.typeScale.web.h6};
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme }) => theme.media.phoneOnly} {
    font-size: ${({ theme }) => theme.typography.typeScale.mobile.h6};
  }
`

export const H5 = styled.h5<TextProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.typeScale.web.h5};
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme }) => theme.media.phoneOnly} {
    font-size: ${({ theme }) => theme.typography.typeScale.mobile.h5};
  }
`

export const H4 = styled.h4<TextProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.typeScale.web.h4};
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme }) => theme.media.phoneOnly} {
    font-size: ${({ theme }) => theme.typography.typeScale.mobile.h4};
  }
`

export const H3 = styled.h3<TextProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.typeScale.web.h3};
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme }) => theme.media.phoneOnly} {
    font-size: ${({ theme }) => theme.typography.typeScale.mobile.h3};
  }
`

export const H2 = styled.h2<TextProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.typeScale.web.h2};
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme }) => theme.media.phoneOnly} {
    font-size: ${({ theme }) => theme.typography.typeScale.mobile.h2};
  }
`

export const H1 = styled.h1<TextProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.typeScale.web.h1};
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme }) => theme.media.phoneOnly} {
    font-size: ${({ theme }) => theme.typography.typeScale.mobile.h1};
  }
`
