import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, style, children, ...props }, ref) => {
    return (
      <CheckboxContainer className={className} style={style}>
        {children}
        <Input type="checkbox" ref={ref} {...props} />
        <CheckmarkContainer>
          <Checkmark />
        </CheckmarkContainer>
      </CheckboxContainer>
    )
  }
)

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const Checkmark = styled(FontAwesomeIcon).attrs(() => ({
  icon: faCheck,
  size: 'xs',
  color: 'white',
}))`
  position: absolute;
  top: 0px;
  left: 0px;
  display: none;
`

const CheckmarkContainer = styled.span`
  position: absolute;
  top: 5px;
  left: 0;
  height: 16px;
  width: 16px;
  border: 2px solid ${({ theme }) => theme.colors.gray60};
  border-radius: 5px 0;
  background-color: ${({ theme }) => theme.colors.gray0};
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`

const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 32px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & ${Input.toString()}:checked ~ ${CheckmarkContainer.toString()} {
    background-color: ${({ theme }) => theme.colors.gray60};
  }

  & ${Input.toString()}:checked ~ ${CheckmarkContainer.toString()} {
    & ${Checkmark.toString()} {
      display: block;
    }
  }

  &:hover input ~ ${CheckmarkContainer.toString()} {
    background-color: ${({ theme }) => theme.colors.gray20};
  }
`
