// @flow

import { alphabet } from 'app/constantes'
import { capitalize, groupBy } from 'lodash'
import React from 'react'
import type { ContextRouter } from 'react-router'
import { withRouter } from 'react-router'
import {
  ContainerListItem,
  InputStyled,
  LinkStyled,
  ListItem,
  Wrapper,
} from './SearchInput.styled'

type Props = $Shape<{|
  data: {
    [key: number]: string,
  },
  ...ContextRouter,
|}>

const SearchInput = ({ data, location, history }: Props) => {
  const [isInputFocus, setIsInputFocus] = React.useState(false)
  const searchRef = React.useRef(null)
  const inputRef = React.useRef(null)
  const keyValue = (Object.keys(data): any).reduce((acc, key) => {
    acc.push([key, data[key]])
    return acc
  }, [])
  const keyValueSorted = groupBy(keyValue, item => {
    return item[1][0]
  })
  const [listItems, setListItems] = React.useState(keyValueSorted)

  const handleKeyUp = React.useCallback(
    (e: KeyboardEvent) => {
      const value: any = Object.values(listItems)

      if (e.keyCode === 13 && value[0].length === 1) {
        e.preventDefault()
        history.push(`${location.pathname}/${value[0][0][0]}`)
      }
    },
    [history, listItems, location],
  )

  const handleClickOutside = React.useCallback((event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsInputFocus(false)
    }
  }, [])

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  React.useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)
    return () => document.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  function handleOnChange(e: SyntheticEvent<HTMLInputElement>) {
    const value = capitalize(e.currentTarget.value)
    const firstLetter = value[0]

    if (!firstLetter) setListItems(keyValueSorted)
    else {
      const newObj = {
        [firstLetter]: (Object.values(
          keyValueSorted[firstLetter] || [],
        ): any).filter(obj => obj[1].includes(value)),
      }
      setListItems(newObj)
    }
  }

  return (
    <Wrapper>
      <InputStyled
        placeholder="Enter name ..."
        onClick={() => setIsInputFocus(true)}
        onChange={handleOnChange}
        ref={inputRef}
      />
      <ContainerListItem ref={searchRef}>
        {isInputFocus &&
          alphabet.map(letter => {
            if (!listItems[letter]) return null
            return (
              <ListItem key={letter}>
                <span>{letter}</span>
                {listItems[letter].map(item => (
                  <LinkStyled
                    key={item[1]}
                    to={`${location.pathname}/${item[0]}`}
                  >
                    {item[1]}
                  </LinkStyled>
                ))}
              </ListItem>
            )
          })}
      </ContainerListItem>
    </Wrapper>
  )
}

export default withRouter<Props>(SearchInput)
