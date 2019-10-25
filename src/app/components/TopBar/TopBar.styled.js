import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  background: linear-gradient(#1b2735 5%, #0d1117 95%);
  height: 73px;
`

export const StyledLink = styled(Link)`
  ${({ theme: { colors }, isactive }) => css`
    flex-basis: 0;
    flex-grow: 1;
    text-decoration: none;
    font-size: 21px;
    letter-spacing: 2px;
    padding: 20px 40px;
    text-align: center;
    color: ${isactive ? colors.yellow : colors.white};
  `}
`

export const Slider = styled.div`
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
