import styled, { css } from 'styled-components'

export interface ButtonProps {
  size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge'
  color?: 'energy' | 'primary'
  fullWidth?: boolean
  variant?: 'contained' | 'outlined' | 'text'
}

const BaseButton = styled.button.attrs((props: ButtonProps) => ({
  size: props.size || 'normal',
  color: props.color || 'primary',
  fullWidth: props.fullWidth || false,
  variant: props.variant || 'contained',
}))`
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

const disabledStyle = css`
  background-color: ${({ theme }) => theme.palette.gray[10]};
  color: ${({ theme }) => theme.palette.gray[45]};
  cursor: not-allowed;
`

const primaryStyleContained = css`
  border: none;
  background-color: #000000;
  color: #ffffff;

  &:focus {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`

const primaryStyleOutlined = css`
  border: 2px solid ${({ theme }) => theme.palette.gray[60]};
  color: ${({ theme }) => theme.palette.gray[60]};
  background-color: rgba(0, 0, 0, 0);

  &:focus,
  &:hover {
    border: 3px solid ${({ theme }) => theme.palette.gray[60]};
    padding: 0 15px;
  }
`

const energyStyleContained = css`
  border: none;
  background-color: ${({ theme }) => theme.palette.energy.main};
  color: ${({ theme }) => theme.palette.energy.contrastText};

  &:focus {
    background-color: ${({ theme }) => theme.palette.energy.light};
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.energy.light};
  }
`

const energyStyleOutlined = css`
  border: 2px solid ${({ theme }) => theme.palette.energy.main};
  color: ${({ theme }) => theme.palette.energy.main};
  background-color: rgba(0, 0, 0, 0);

  &:focus,
  &:hover {
    border: 3px solid ${({ theme }) => theme.palette.energy.main};
    padding: 0 15px;
  }
`

export const Button = styled(BaseButton)`
  ${({ disabled, color, variant }) => {
    if (disabled) return disabledStyle
    if (variant === 'outlined') {
      if (color === 'energy') return energyStyleOutlined
      else {
        return primaryStyleOutlined
      }
    }
    if (color === 'energy') return energyStyleContained
    else {
      return primaryStyleContained
    }
  }}
`

// &:active {
//   height: 34px;
//   transform: translate(3px, 1px);
// }
// &:active {
//   height: 38px;
//   transform: translate(3px, 1px);
// }
// &:active {
//   height: 46px;
//   transform: translate(3px, 1px);
// }
// &:active {
//   height: 50px;
//   transform: translate(3px, 1px);
// }
// &:active {
//   height: 42px;
//   transform: translate(3px, 1px);
// }
