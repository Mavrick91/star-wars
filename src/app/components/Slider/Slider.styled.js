import styled, { css } from 'styled-components'

export const SliderStyled = styled.div`
  ${({ theme: { colors } }) => css`
    height: 3px;
    border-radius: 3px;
    background-color: ${colors.yellow};
    position: absolute;
    z-index: 1200;
    bottom: 0;
    left: 0;
    transition: left 0.4s linear, width 0.4s linear;
  `}
`
