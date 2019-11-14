// @flow

import * as React from 'react'
import Loader from 'react-loader-spinner'
import { Wrapper } from './Loader.styled'

type Props = $Shape<{
  type?: string,
  colors?: string,
  height?: number,
  width?: number,
}>

function CustomLoader({
  type = 'Puff',
  colors = '#cfa100',
  height = 150,
  width = 150,
}: Props) {
  return (
    <Wrapper>
      <Loader type={type} color={colors} height={height} width={width} />
    </Wrapper>
  )
}

export default CustomLoader
