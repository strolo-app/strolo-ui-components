import React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
  size: 'tiny' | 'small' | 'normal' | 'large' | 'huge'
  color: 'energy' | 'primary'
  fullWidth: boolean
}

export interface ButtonProps extends Partial<StyledButtonProps> {
  disabled?: boolean
  variant?: 'contained' | 'outlined' | 'text'
}

const BaseButton = styled.button<StyledButtonProps>`
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

const DisabledButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.palette.gray[10]};
  color: ${({ theme }) => theme.palette.gray[45]};
  cursor: not-allowed;
`

const ContainedButton = styled(BaseButton)`
  border: none;
  background-color: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrastText};

  &:focus,
  &:hover {
    background-color: ${({ theme, color }) => theme.palette[color].light};
  }
`

const OutlinedButton = styled(BaseButton)`
  border: 2px solid ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].main};
  background-color: rgba(0, 0, 0, 0);

  &:focus,
  &:hover {
    border: 3px solid ${({ theme, color }) => theme.palette[color].main};
    padding: 0 15px;
  }
`

export const Button = ({
  disabled,
  variant = 'contained',
  size = 'normal',
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  if (disabled) {
    return <DisabledButton size={size} color={color} fullWidth={fullWidth} {...props} />
  }
  if (variant === 'outlined') {
    return <OutlinedButton size={size} color={color} fullWidth={fullWidth} {...props} />
  }
  return <ContainedButton size={size} color={color} fullWidth={fullWidth} {...props} />
}
