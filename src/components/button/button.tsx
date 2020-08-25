import styled, { css } from 'styled-components'
import * as React from 'react'
interface BaseButtonProps {
  size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge'
  fullWidth?: boolean
}

interface ButtonProps extends BaseButtonProps {
  color?: 'energy' | 'health' | 'calm' | 'primary'
  disabled?: boolean
  loading?: boolean
}

interface OutlinedButtonProps extends BaseButtonProps {
  disabled?: boolean
  color?: 'black' | 'white'
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

  ${({ size }) => {
    switch (size) {
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

  &:active {
    transform: scale(0.95, 0.95);
  }
`

const disabledButtonStyles = css`
  border: none;
  background-color: ${({ theme }) => theme.colors.gray10};
  color: ${({ theme }) => theme.colors.gray45};
  cursor: not-allowed;
`

const loadingButtonStyles = css`
  cursor: not-allowed;
`

const ButtonStyle = styled(BaseButton)<ButtonProps>`
  ${({ theme, color = 'primary', disabled, loading }) =>
    disabled && !loading
      ? disabledButtonStyles
      : `
    border: none;
    background-color: ${theme.palette[color].main};
    color: ${theme.palette[color].contrastText};
    cursor: ${loading ? 'not-allowed;' : ''}
    &:focus,
    &:hover {
      background-color: ${loading ? '' : theme.palette[color].light};
    }
  `}
`

export const Button: React.FC<ButtonProps> = ({ disabled, loading, color, ...props }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  // @ts-ignore
  const nonLoadingWidth = React.useMemo(() => {
    if (loading && ref && ref.current) {
      return ref.current.offsetWidth
    }
  }, [loading, ref])

  return (
    <ButtonStyle disabled={disabled || loading} loading={loading} {...props}>
      {loading ? (
        <div style={{ width: nonLoadingWidth, textAlign: 'center' }}>
          <Spinner color={color} />
        </div>
      ) : (
        <div ref={ref}>{props.children}</div>
      )}
    </ButtonStyle>
  )
}

export const OutlinedButton = styled(BaseButton)<OutlinedButtonProps>`
  ${({ theme, disabled, color = 'black' }) =>
    disabled
      ? disabledButtonStyles
      : `
  border: 2px solid ${color === 'white' ? theme.colors.gray0 : theme.palette.primary.main};
  color: ${color === 'white' ? theme.colors.gray0 : theme.palette.primary.main};
  background-color: rgba(0, 0, 0, 0);

  &:focus,
  &:hover {
    border: 3px solid ${color === 'white' ? theme.colors.gray0 : theme.palette.primary.main};
    padding: 0 15px;
  }
  `}
`
const Spinner = styled.div<ButtonProps>`
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
const ButtonText = styled.div<{ loading?: boolean }>``
