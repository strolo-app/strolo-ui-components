import styled from 'styled-components'

export const Textarea = styled.textarea<{ error?: boolean }>`
  border: 2px solid ${({ theme, error }) => (error ? theme.colors.health30 : theme.colors.gray30)};
  border-radius: 2px;
  width: 100%;
  padding: 16px;
  font-size: 1.125rem;
  outline: none;
  resize: none;
  transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;
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
