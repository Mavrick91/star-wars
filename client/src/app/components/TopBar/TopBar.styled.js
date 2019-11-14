import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  background: linear-gradient(#1b2735 5%, #0d1117 95%);
  height: 73px;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;
  width: 1200px;
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
    font-family: starjedi;

    &:hover {
      cursor: pointer;
    }
  `}
`
