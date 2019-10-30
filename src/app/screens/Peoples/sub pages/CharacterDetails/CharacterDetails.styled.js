import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const Character = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;

  img {
    height: 620px;
    width: 350px;
  }

  span {
    text-transform: uppercase;
    font-size: 50px;
    color: white;
    margin-top: 30px;
    text-align: center;
  }
`

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Description = styled.div`
  color: white;
  margin: 20px 0;
  font-size: 24px;

  &:nth-child(1) {
    text-transform: capitalize;
  }
  &:nth-child(2) {
    text-transform: capitalize;
  }
`

export const Planet = styled.div`
  align-self: flex-start;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  span {
    text-transform: uppercase;
    font-size: 30px;
    color: white;
    margin-top: 20px;

`
