import styled, { css } from 'styled-components'

export interface ButtonProps {
  size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge'
  color?: 'energy' | 'primary'
  // variant?: 'contained' | 'outlined' | 'text'
}

const BaseButton = styled.button.attrs((props: ButtonProps) => ({
  size: props.size || 'normal',
  color: props.color || 'primary',
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
  transition: background-color 0.5s ease-in-out;

  height: ${({ size = 'normal' }) => {
    switch (size) {
      case 'tiny':
        return '36px'
      case 'small':
        return '40px'
      case 'large':
        return '48px'
      case 'huge':
        return '52px'
      case 'normal':
      default:
        return '44px'
    }
  }};

  border-radius: ${({ size = 'normal' }) => {
    switch (size) {
      case 'tiny':
        return '8px 0px;'
      case 'small':
        return '10px 0px;'
      case 'large':
        return '16px 0px;'
      case 'huge':
        return '18px 0px;'
      case 'normal':
      default:
        return '12px 0px;'
    }
  }};
`

const disabledStyle = css`
  background-color: ${({ theme }) => theme.palette.gray[10]};
  color: ${({ theme }) => theme.palette.gray[45]};
  cursor: not-allowed;
`

const primaryStyle = css`
  background: #000000;
  color: #ffffff;

  &:focus {
    border: 2px solid ${(props) => props.theme.palette.gray[50]};
    padding: 0 14px;
  }
  &:hover {
    background: ${({ theme }) => theme.palette.primary.light};
  }
  &:active {
    border: none;
    padding: 0 16px;
  }
`

const energyStyle = css`
  background: ${({ theme }) => theme.palette.energy.main};
  color: ${({ theme }) => theme.palette.energy.contrastText};

  &:focus {
    border: 2px solid ${(props) => props.theme.palette.gray[50]};
    padding: 0 14px;
  }
  &:hover {
    background: ${({ theme }) => theme.palette.energy.light};
  }
  &:active {
    border: none;
    padding: 0 16px;
  }
`

export const Button = styled(BaseButton).attrs((props: ButtonProps) => ({
  color: props.color || 'primary',
}))`
  border: none;
  ${({ disabled, color }) =>
    !!disabled ? disabledStyle : color === 'primary' ? primaryStyle : energyStyle}
`
