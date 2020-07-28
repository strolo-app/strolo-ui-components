import React from 'react'
import styled from 'styled-components'

import BlackCircleLogo from '../../assets/black-circle-logo.svg'

export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  return <LoadingIcon src={BlackCircleLogo} />
}

const LoadingIcon = styled.img`
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
`
