// @flow
import * as React from 'react'
import { get } from 'lodash'
import MainButton from 'app/components/MainButton'
import arrowLeft from 'app/resources/svg/arrow left.svg'
import arrowRight from 'app/resources/svg/arrow right.svg'
import CustomLoader from 'app/components/Loader/index'
import type { RouterHistory } from 'react-router-dom'
import type { PeoplesType } from '.'

import {
  Wrapper,
  WrapperCharacter,
  ContainerButton,
  Name,
  Character,
  Image,
  BackgroundImage,
} from './Peoples.styled'

type Props = {
  loading: boolean,
  data: ?PeoplesType,
  loadPreviousOrNext: Function,
  history: RouterHistory,
}

function Peoples({ data, loading, loadPreviousOrNext, history }: Props) {
  const [listCharacter, setListCharacter] = React.useState(null)
  const [characterHovered, setCharacterHovered] = React.useState(null)

  React.useEffect(() => {
    if (data) getContentToDisplay()
  }, [get(data, 'peoples.results')])

  function getContentToDisplay() {
    if (!data) return null

    const map: Array<Promise<any>> = data.peoples.results.map(({ name }) => {
      return import(`app/resources/images/peoples/${name}.png`).then(res => {
        return (
          <Character key={name}>
            <Image
              src={res.default}
              alt={`${name} character`}
              onClick={() => history.push(`/peoples/${name}`)}
              onMouseEnter={() => setCharacterHovered(res.default)}
              onMouseLeave={() => setCharacterHovered(null)}
            />
            <Name>{name}</Name>
          </Character>
        )
      })
    })

    Promise.all(map).then((newList: Array<React.Node>) => {
      setListCharacter(newList)
    })
  }

  function displayContent() {
    return (
      <WrapperCharacter>
        {loading ? <CustomLoader type="Triangle" /> : listCharacter}
      </WrapperCharacter>
    )
  }

  function handleClickPreviousNext(url) {
    setListCharacter(null)
    loadPreviousOrNext(url)
  }

  return (
    <Wrapper>
      <ContainerButton>
        {data && (
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
        {data && (
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
      <BackgroundImage>
        <img src={characterHovered} alt="" />
      </BackgroundImage>
    </Wrapper>
  )
}

export default Peoples
