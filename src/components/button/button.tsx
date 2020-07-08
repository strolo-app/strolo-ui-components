import styled, { css } from 'styled-components'

interface BaseButtonProps {
  size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge'
  fullWidth?: boolean
}

interface ButtonProps extends BaseButtonProps {
  color?: 'energy' | 'health' | 'calm' | 'primary'
  disabled?: boolean
}

interface OutlinedButtonProps extends BaseButtonProps {
  disabled?: boolean
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

export const Button = styled(BaseButton)<ButtonProps>`
  ${({ theme, color = 'primary', disabled }) =>
    disabled
      ? disabledButtonStyles
      : `
    border: none;
    background-color: ${theme.palette[color].main};
    color: ${theme.palette[color].contrastText};

    &:focus,
    &:hover {
      background-color: ${theme.palette[color].light};
    }
  `}
`

export const OutlinedButton = styled(BaseButton)<OutlinedButtonProps>`
  ${({ theme, disabled }) =>
    disabled
      ? disabledButtonStyles
      : `
  border: 2px solid ${theme.palette.primary.main};
  color: ${theme.palette.primary.main};
  background-color: rgba(0, 0, 0, 0);

  &:focus,
  &:hover {
    border: 3px solid ${theme.palette.primary.main};
    padding: 0 15px;
  }
  `}
`
