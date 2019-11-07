import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  min-width: 800px;
  max-width: 800px;
  flex-direction: column;
  border: 2px solid #0d1117;
  box-shadow: 4px 4px 94px 14px #0d1117;
`
export const Tab = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  background: linear-gradient(#1b2735 5%, #0d1117 95%);
`

export const InnerTab = styled.div`
  ${({ theme: { colors }, isActive }) => css`
    padding: 20px;
    color: ${isActive ? colors.yellow : colors.white};
    cursor: pointer;
  `}
`

export const Information = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 0;
  max-height: 374px;
  min-height: 374px;
  overflow: auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 22%;
  justify-content: flex-start;

  &:nth-child(2n + 2),
  &:nth-child(3n + 3) {
    margin-left: 10px;
  }

  img {
    width: 100%;
    cursor: pointer;
  }

  span {
    cursor: pointer;
    margin-top: 20px;
    text-align: center;
  }
`
