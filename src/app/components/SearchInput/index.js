import React from 'react'
import styled from 'styled-components'

type Props = {
  elements: Array<string>,
  handleOnClick: () => void,
}

const InputStyled = styled.input`
  height: 50px;
  padding: 10px;
  outline: none;
  border: none;
  background: #373737;
  font-size: 18px;
`

const StyledElement = styled.div``

function SearchInput({ elements, handleOnClick }: Props) {
  const [displayList, setDisplayList] = React.useState(false)

  return (
    <div>
      <InputStyled
        type="text"
        onFocus={() => setDisplayList(true)}
        onBlur={() => setDisplayList(false)}
      />
      {displayList &&
        elements.map(element => (
          <StyledElement
            key={element}
            role="button"
            tabIndex={0}
            onClick={() => handleOnClick(element)}
          >
            {element}
          </StyledElement>
        ))}
    </div>
  )
}

export default SearchInput
