// @flow

import * as React from 'react'
import Loader from 'react-loader-spinner'

type Props = $Shape<{
  +type?: string,
  +colors?: string,
  +height?: number,
  +width?: number,
}>

function CustomLoader({
  type = 'Puff',
  colors = '#cfa100',
  height = 150,
  width = 150,
}: Props) {
  return <Loader type={type} color={colors} height={height} width={width} />
}

export default CustomLoader
