import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const WrapperSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1350px;
  min-width: 1000px;
  justify-content: center;
  z-index: 10;
  margin: 0 auto;

  & > div > img:hover {
    transform: scale(1.2);
  }
`
