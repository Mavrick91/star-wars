// @flow

import React from 'react'
import { SliderStyled } from './Slider.styled'

type Props = {
  style: {
    width: number,
    left: number,
  },
}

const Slider = ({ style }: Props) => {
  return <SliderStyled style={style} />
}

export default Slider
