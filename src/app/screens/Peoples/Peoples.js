// @flow
import CustomLoader from 'app/components/Loader/index'
import MainButton from 'app/components/MainButton'
import arrowLeft from 'app/resources/svg/arrow left.svg'
import arrowRight from 'app/resources/svg/arrow right.svg'
import { getCategoryAndValue } from 'app/utils'
import { get } from 'lodash'
import * as React from 'react'
import type { RouterHistory } from 'react-router-dom'
import type { PeoplesType } from '.'

import {
  Character,
  ContainerButton,
  Image,
  Name,
  Wrapper,
  WrapperCharacter,
} from './Peoples.styled'

type Props = {
  loading: boolean,
  data: ?PeoplesType,
  loadPreviousOrNext: Function,
  history: RouterHistory,
}

function Peoples({ data, loading, loadPreviousOrNext, history }: Props) {
  const [listCharacter, setListCharacter] = React.useState(null)
  const peopleResult = get(data, 'peoples.results', [])

  const getContentToDisplay = React.useCallback(() => {
    const map: Array<Promise<any>> = peopleResult.map(({ url }) => {
      const { category, value } = getCategoryAndValue(url)

      return import(`app/resources/images/${category}/${value}.png`).then(
        res => {
          const idCharacter: RegExp$matchResult | null = url.match(/\d+/)

          return (
            <Character key={value}>
              <Image
                src={res.default}
                alt={`${value} character`}
                onClick={() =>
                  history.push(`/peoples/${idCharacter ? idCharacter[0] : 1}`)
                }
              />
              <Name>{value}</Name>
            </Character>
          )
        },
      )
    })

    Promise.all(map).then((newList: Array<React.Node>) => {
      setListCharacter(newList)
    })
  }, [history, peopleResult])

  React.useEffect(() => {
    if (peopleResult.length !== 0) getContentToDisplay()
  }, [getContentToDisplay, peopleResult])

  function displayContent() {
    if (loading) return <CustomLoader />

    return <WrapperCharacter>{listCharacter}</WrapperCharacter>
  }

  function handleClickPreviousNext(url) {
    setListCharacter(null)
    loadPreviousOrNext(url)
  }

  return (
    <Wrapper>
      <ContainerButton>
        {data && data.peoples.previous && (
          <MainButton
            size="md"
            centerHorizontally
            noAnim
            onClick={() => handleClickPreviousNext(data.peoples.previous)}
          >
            <img src={arrowLeft} alt="arrow left" />
          </MainButton>
        )}
      </ContainerButton>
      {displayContent()}
      <ContainerButton>
        {data && data.peoples.next && (
          <MainButton
            size="md"
            centerHorizontally
            noAnim
            onClick={() => handleClickPreviousNext(data.peoples.next)}
          >
            <img src={arrowRight} alt="arrow right" />
          </MainButton>
        )}
      </ContainerButton>
    </Wrapper>
  )
}

export default Peoples
