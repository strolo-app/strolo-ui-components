import React from 'react'
import styled, { css } from 'styled-components'
import { Color } from '../../global/default-theme'

interface BaseButtonProps {
  variant?: 'tiny' | 'small' | 'normal' | 'large' | 'huge'
  fullWidth?: boolean
}

interface ButtonStyleProps extends BaseButtonProps {
  color?: 'energy' | 'health' | 'calm' | 'primary'
  loading?: boolean
}

interface OutlinedButtonStyleProps extends BaseButtonProps {
  color?: 'gray0' | 'gray60'
  loading?: boolean
}

const BaseButton = styled.button<BaseButtonProps>`
  outline: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0px 16px;
  cursor: pointer;
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
  transition: background-color 0.25s ease-in-out;
  text-align: center;
  justify-content: center;
  ${({ fullWidth }) => (fullWidth ? `width: 100%;` : `width: fit-content;`)}

  ${({ variant }) => {
    switch (variant) {
      case 'tiny':
        return `
          height: 36px;
          border-radius: 8px 0px;
          font-size: 0.75rem;
        `
      case 'small':
        return `
          height: 40px;
          border-radius: 10px 0px;
          font-size: 0.875rem;
        `
      case 'large':
        return `
          height: 48px;
          border-radius: 16px 0px;
          font-size: 1rem;
        `
      case 'huge':
        return `
          height: 52px;
          border-radius: 18px 0px;
          font-size: 1.125rem;
        `
      case 'normal':
      default:
        return `
          height: 44px;
          border-radius: 12px 0px;
          font-size: 1rem;
        `
    }
  }}
`

const disabledButtonStyles = css`
  border: none;
  background-color: ${({ theme }) => theme.colors.gray20};
  color: ${({ theme }) => theme.colors.gray45};
  cursor: not-allowed;
`

const ButtonStyled = styled(BaseButton)<ButtonStyleProps>`
  ${({ theme, color = 'primary', disabled, loading }) => {
    if (disabled && !loading) return disabledButtonStyles
    else if (loading)
      return `
      border: none;
      background-color: ${theme.palette[color].main};
      color: ${theme.palette[color].contrastText};
      cursor: ${loading ? 'not-allowed;' : ''}
    `
    return `
      border: none;
      background-color: ${theme.palette[color].main};
      color: ${theme.palette[color].contrastText};
      cursor: ${loading ? 'not-allowed;' : ''}
      &:focus,
      &:hover {
        background-color: ${loading ? '' : theme.palette[color].light};
      }
      &:active {
        transform: scale(0.95, 0.95);
      }
    `
  }}
`

const Spinner = styled.div<{ color: Color | ButtonStyleProps['color'] }>`
  display: inline-block;
  pointer-events: none;
  width: 1.5em;
  height: 1.5em;
  border: 0.2em solid transparent;
  border-color: ${({ theme, color = 'primary' }) => theme.palette[color].light};
  border-top-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 50%;
  animation: loadingspin 1s linear infinite;

  @keyframes loadingspin {
    100% {
      transform: rotate(360deg);
    }
  }
`

type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'as' | 'ref' | 'type'> &
  ButtonStyleProps & { type?: 'button' | 'reset' | 'submit' }
export const Button: React.FC<ButtonProps> = ({ disabled, loading, color, ...props }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const nonLoadingWidth = React.useMemo(() => {
    if (loading && ref && ref.current) {
      return ref.current.offsetWidth
    }
    return
  }, [loading, ref])

  return (
    <ButtonStyled disabled={disabled || loading} loading={loading} color={color} {...props}>
      {loading ? (
        <div style={{ width: nonLoadingWidth, textAlign: 'center' }}>
          <Spinner color={color} />
        </div>
      ) : (
        <div ref={ref}>{props.children}</div>
      )}
    </ButtonStyled>
  )
}

const OutlinedButtonStyled = styled(BaseButton)<OutlinedButtonStyleProps>`
  ${({ theme, disabled, loading, color = 'gray60' }) => {
    if (disabled && !loading) return disabledButtonStyles
    else if (loading)
      return `
      border: 2px solid ${theme.colors[color]};
      color: ${theme.colors[color]};
      background-color: rgba(0, 0, 0, 0);
      cursor: not-allowed;
    `
    return `
      border: 2px solid ${theme.colors[color]};
      color: ${theme.colors[color]};
      background-color: rgba(0, 0, 0, 0);

      &:focus,
      &:hover {
        border: 3px solid ${theme.colors[color]};
        padding: 0 15px;
      }
      &:active {
        transform: scale(0.95, 0.95);
      }
    `
  }}
`

type OutlinedButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'as' | 'ref' | 'type'> &
  OutlinedButtonStyleProps & { type?: 'button' | 'reset' | 'submit' }
export const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  disabled,
  loading,
  color,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const nonLoadingWidth = React.useMemo(() => {
    if (loading && ref && ref.current) {
      return ref.current.offsetWidth
    }
    return
  }, [loading, ref])

  return (
    <OutlinedButtonStyled disabled={disabled || loading} color={color} loading={loading} {...props}>
      {loading ? (
        <div style={{ width: nonLoadingWidth, textAlign: 'center' }}>
          <Spinner color={color} />
        </div>
      ) : (
        <div ref={ref}>{props.children}</div>
      )}
    </OutlinedButtonStyled>
  )
}
