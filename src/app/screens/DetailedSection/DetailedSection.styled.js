import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const WrapperImage = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;

  img {
    height: 100%;
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
  max-width: 800px;
  min-width: 800px;
`

export const ContainerDescription = styled.div`
  display: flex;
  margin-bottom: 30px;

  & > div:nth-child(1) {
    white-space: nowrap;
  }

  & > div:nth-child(2) {
    margin-left: 20px;
  }
`

export const Description = styled.div`
  color: white;
  font-size: 24px;
  text-transform: capitalize;
  
  	& + & {
  		  margin-top: 20px;
  	}
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
