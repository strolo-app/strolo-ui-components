import React from 'react'
import styled from 'styled-components'

import { Logo } from '../logo'

export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  return (
    <LoadingIcon>
      <Logo color="white" width={25} />
    </LoadingIcon>
  )
}

const LoadingIcon = styled.div`
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
