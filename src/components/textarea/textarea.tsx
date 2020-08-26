import React from 'react'
import styled from 'styled-components'

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  error?: string
}

// const StyledTextarea = styled.textarea<{ error?: boolean }>`
//   border: 2px solid ${({ theme, error }) => (error ? theme.colors.health30 : theme.colors.gray30)};
//   border-radius: 2px;
//   width: 100%;
//   padding: 16px;
//   font-size: 1.125rem;
//   outline: none;
//   resize: none;
//   transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;
//   &::placeholder {
//     color: ${({ theme }) => theme.colors.gray45};
//     font-weight: 600;
//   }
//   &:hover {
//     border: 2px solid ${({ theme, error }) => (error ? theme.colors.health30 : theme.colors.gray60)};
//   }
//   &:focus {
//     border: 3px solid ${({ theme, error }) => (error ? theme.colors.health30 : theme.colors.gray60)};
//     padding-left: 15px;
//   }
// `

const StyledTextarea = styled.textarea<{ error?: string; disabled?: boolean }>`
  width: 100%;
  padding-top: 24px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 14px;
  font-size: 1rem;
  border: 2px solid ${({ theme, error }) => (!!error ? theme.colors.health30 : theme.colors.gray30)};
  border-radius: 2px;
  transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;
  caret-color: ${({ theme }) => theme.colors.gray50};
  outline: none;
  font-weight: 600;
  background-color: ${({ theme, disabled }) =>
    !!disabled ? theme.colors.gray10 : theme.colors.gray0};
  resize: none;

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
    padding-top: 23px;
    padding-bottom: 13px;
  }
`

const Label = styled.label<{ for?: string }>`
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
    background-color: blue;
  }

  ${StyledTextarea}:focus + &::after {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  ${StyledTextarea}:placeholder-shown + &::before {
    transform: translate3d(0, 0.5rem, 0) scale3d(1, 1, 1);
  }
  &::before,
  ${StyledTextarea}:focus + &::before {
    transform: translate3d(0, 0.2rem, 0) scale3d(0.74, 0.74, 1);
  }
`

const Wrapper = styled.div`
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  height: 24px;
  background-color: white;
  top: 2px;
  left: 2px;
  right: 2px;
  transition: top 0.25s ease-in-out, left 0.25s ease-in-out, right 0.25s ease-in-out;
  ${StyledTextarea}:focus ~ & {
    top: 3px;
    left: 3px;
    right: 3px;
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

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ name, placeholder, style, className, ...props }, ref) => {
    return (
      <Wrapper style={style} className={className}>
        {/* @ts-ignore I'm pretty sure styled component's types are off */}
        <StyledTextarea name={name} ref={ref} placeholder={placeholder} {...props} />
        <Label for={name} data-content={placeholder}>
          <Span>{placeholder}</Span>
        </Label>
        <Overlay />
      </Wrapper>
    )
  }
)
