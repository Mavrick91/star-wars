import styled from 'styled-components'

export const Wrapper = styled.div`
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

  &:hover {
    cursor: pointer;
  }
`
export const Name = styled.div`
  margin-top: 50px;
  font-size: 20px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`
