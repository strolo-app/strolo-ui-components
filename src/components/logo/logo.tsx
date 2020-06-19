import React from 'react'

export interface LogoProps {
  height?: number
  width?: number
  color?: 'black' | 'white'
}

export const Logo: React.FC<LogoProps & React.SVGProps<SVGSVGElement>> = ({
  color = 'black',
  width = 50,
  height = 82,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M48.5787 44.7952L33.5405 35.8507C32.1531 35.0256 30.3527 35.4699 29.5191 36.8432L4.79213 77.5796C3.10454 80.3598 6.59645 83.3685 9.14552 81.3305L48.9107 49.5386C50.4943 48.2725 50.3236 45.833 48.5787 44.7952Z"
        fill={color}
      />
      <path
        d="M1.42134 37.2048L16.4595 46.1493C17.8469 46.9744 19.6473 46.5301 20.4809 45.1568L45.2079 4.42043C46.8955 1.64021 43.4035 -1.36849 40.8545 0.669475L1.08935 32.4614C-0.494337 33.7275 -0.323603 36.167 1.42134 37.2048Z"
        fill={color}
      />
    </svg>
  )
}
