import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 73px);
  position: relative;
`

export const WrapperCharacter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1350px;
  justify-content: center;
  z-index: 10;

  & > div > img:hover {
    transform: scale(1.2);
  }
`

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 300px;
  flex: 0 1 20%;
`

export const Image = styled.img`
  width: 120px;
  cursor: pointer;
  transition: transform 0.6s ease-out;
`
export const Name = styled.div`
  margin-top: 50px;
  font-size: 20px;
  color: white;
`

export const ContainerButton = styled.div`
  width: 100px;
  min-width: 100px;
  position: relative;
  z-index: 1000;
`

export const BackgroundImage = styled.div`
  position: absolute;
  z-index: 5;
  right: 0;
  top: 0;
  height: 150%;
  transition: transform 1s ease-out;

  img {
    opacity: 0.4;
    height: 100%;
  }
`
