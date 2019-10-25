// @flow

import * as React from 'react'
import Wrapper from './MainButton.styled'

type Props = $Shape<{
  children: React.Node,
  size?: 'sm' | 'md' | 'lg',
  onClick: Function,
  right: number,
  bottom: number,
  left: number,
  top: number,
  centerHorizontally: boolean,
  centerVertically: boolean,
  noAnim: boolean,
}>

const MainButton = ({
  children,
  size,
  onClick,
  centerHorizontally,
  centerVertically,
  right,
  bottom,
  top,
  left,
  noAnim,
}: Props) => {
  return (
    <Wrapper
      size={size}
      noAnim={noAnim}
      centerVertically={centerVertically}
      onClick={onClick}
      centerHorizontally={centerHorizontally}
      right={right}
      bottom={bottom}
      top={top}
      left={left}
    >
      {children}
    </Wrapper>
  )
}

export default MainButton
