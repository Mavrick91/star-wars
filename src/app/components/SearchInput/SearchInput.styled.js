import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
  z-index: 20;
`

export const InputStyled = styled.input`
  height: 70px;
  width: 100%;
  padding: 0 40px;
  font-size: 22px;
  outline: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  text-transform: capitalize;
`

export const ContainerListItem = styled.div`
  position: absolute;
  max-height: 370px;
  overflow: auto;
  left: 0;
  right: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #1b2735;
`

export const ListItem = styled.div`
  padding: 15px 25px;
  font-size: 22px;
`

export const LinkStyled = styled(Link)`
  padding: 15px 25px;
  font-size: 18px;
  color: white;
  display: block;
  text-decoration: none;
`
