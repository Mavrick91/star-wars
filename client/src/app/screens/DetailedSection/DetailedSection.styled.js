import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const WrapperAvatar = styled.div`
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
    font-size: 50px;
    color: white;
    margin-top: 30px;
    text-align: center;
    font-family: starjout;
    text-transform: lowercase;
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
    div {
      font-size: 18px;
      line-height: 25px;
    }
  }
`

export const Description = styled.div`
  color: white;
  font-size: 22px;
  text-transform: capitalize;
  
  	& + & {
  		  margin-top: 20px;
  	}
  }
`
