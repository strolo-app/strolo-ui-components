import React from 'react'
import styled from 'styled-components'
import { P2 } from '../text'

export interface TextInputStyleProps {
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
  position: absolute;
  top: 0;
  max-height: 0;
  font-weight: 600;
  font-size: 1.125rem;
  pointer-events: none;
  z-index: 1;

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
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    height: 0.1rem;
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
    opacity: 0;
    margin-top: -0.1rem;
    transform: scale3d(0, 1, 1);
    width: 100%;
  }

  ${Input}:focus + &::after {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  ${Input}:placeholder-shown + &::before {
    transform: translate3d(0, 0.8rem, 0) scale3d(1, 1, 1);
  }
  &::before,
  ${Input}:focus + &::before {
    transform: translate3d(0, 0.2rem, 0) scale3d(0.74, 0.74, 1);
  }
`

const Wrapper = styled.div`
  position: relative;
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
  ({ style, className, name, placeholder, helperText, error, ...props }, ref) => {
    return (
      <>
        <Wrapper style={style} className={className}>
          <Input name={name} ref={ref} placeholder={placeholder} error={error} {...props} />
          <Label htmlFor={name} data-content={placeholder}>
            <Span>{placeholder}</Span>
          </Label>
        </Wrapper>
        {!!helperText && (
          <P2 fontWeight={600} color="gray45">
            {helperText}
          </P2>
        )}
        {!!error && (
          <P2 fontWeight={600} color="health30">
            {error}
          </P2>
        )}
      </>
    )
  }
)
