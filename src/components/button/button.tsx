import styled from 'styled-components'

export interface ButtonProps {
  size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge'
  variant?: 'contained' | 'outlined' | 'text'
}

export const Button = styled.button.attrs((props: ButtonProps) => ({
  size: props.size || 'normal',
}))`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0px 16px;
  cursor: pointer;
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
  transition: background-color 0.15s ease-in-out;

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

  background: #000000;
  color: #ffffff;
  border: none;

  ${({ disabled }) =>
    !!disabled &&
    `
    background-color: #EEEEEF;
    color: #72757E;
    cursor: not-allowed;
  `}
`
