import React from 'react'
import styled from 'styled-components'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
}

export const Select: React.FC<SelectProps> = (props) => {
  return <StyledSelect {...props}></StyledSelect>
}

const StyledSelect = styled.select<SelectProps>`
  border: 2px solid ${({ theme, error }) => (error ? theme.colors.health30 : theme.colors.gray30)};
  border-radius: 2px;
  height: 56px;
  width: 100%;
  padding-left: 16px;
  font-size: 1.125rem;
  outline: none;
  transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray45};
    font-weight: 600;
  }
  &:hover {
    border: 2px solid ${({ theme, error }) => (error ? theme.colors.health30 : theme.colors.gray60)};
  }
  &:focus {
    border: 3px solid ${({ theme, error }) => (error ? theme.colors.health30 : theme.colors.gray60)};
    padding-left: 15px;
  }
`
