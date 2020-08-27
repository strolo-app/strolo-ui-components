import React from 'react'
import styled from 'styled-components'
import { FormValidation } from '../form-validation'

export interface TextInputStyleProps
  extends Pick<
    React.HTMLProps<HTMLInputElement>,
    'name' | 'placeholder' | 'onClick' | 'onChange' | 'type' | 'disabled' | 'style' | 'className'
  > {
  error?: string
  helperText?: string
}

const Input = styled.input<TextInputStyleProps>`
  width: 100%;
  padding-top: 16px;
  padding-left: 14px;
  padding-right: 14px;
  height: 56px;
  font-size: 1rem;
  border: 2px solid ${({ theme, error }) => (!!error ? theme.colors.health30 : theme.colors.gray30)};
  border-radius: 2px;
  transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;
  caret-color: ${({ theme }) => theme.colors.gray50};
  outline: none;
  font-weight: 600;
  background-color: ${({ theme, disabled }) =>
    !!disabled ? theme.colors.gray20 : theme.colors.gray0};

  &::placeholder {
    color: rgba(0, 0, 0, 0);
  }

  &:hover {
    ${({ theme, error, disabled }) =>
      !disabled && `border: 2px solid ${error ? theme.colors.health30 : theme.colors.gray60};`}
  }
  &:focus {
    border: 3px solid ${({ theme, error }) => (error ? theme.colors.health30 : theme.colors.gray60)} !important;
    padding-left: 13px;
    padding-right: 13px;
  }
`

const Label = styled.label`
  display: block;
  position: relative;
  max-height: 0;
  font-weight: 600;
  font-size: 1.125rem;
  pointer-events: none;

  &::before {
    color: ${({ theme }) => theme.colors.gray40};
    content: attr(data-content);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transform-origin: left top;
    transition: transform 0.2s ease;
    left: 1rem;
    position: relative;
  }

  &::after {
    bottom: 1rem;
    content: '';
    height: 0.1rem;
    position: absolute;
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
    opacity: 0;
    left: 0;
    top: 100%;
    margin-top: -0.1rem;
    transform: scale3d(0, 1, 1);
    width: 100%;
    background-color: var(--color__accent);
  }

  ${Input}:focus + &::after {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  ${Input}:placeholder-shown + &::before {
    transform: translate3d(0, -2.62rem, 0) scale3d(1, 1, 1);
  }
  &::before,
  ${Input}:focus + &::before {
    transform: translate3d(0, -3.24rem, 0) scale3d(0.74, 0.74, 1);
  }
`

const Span = styled.span`
  border: 0;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

type TextInputProps = Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'as'> & TextInputStyleProps
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, placeholder, helperText, error, ...props }, ref) => {
    return (
      <>
        <Input name={name} ref={ref} placeholder={placeholder} error={error} {...props} />
        <Label htmlFor={name} data-content={placeholder}>
          <Span>{placeholder}</Span>
        </Label>
        {!!helperText && (
          <FormValidation fontWeight={600} color="gray45">
            {helperText}
          </FormValidation>
        )}
        {!!error && (
          <FormValidation fontWeight={600} color="health30">
            {error}
          </FormValidation>
        )}
      </>
    )
  }
)
