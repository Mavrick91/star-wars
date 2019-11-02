// @flow

import TabBar from 'app/components/TabBar'
import useImport from 'app/utils/customHooks/useImport'
import { pick, startCase, get } from 'lodash'
import React from 'react'
import {
  Character,
  Description,
  Planet,
  Wrapper,
  WrapperDescription,
} from './CharacterDetails.styled'

type Props = {
  data: {
    people: {
      name: string,
      height: string,
      created: string,
      gender: string,
      vehicles: Array<string>,
      url: string,
      skin_color: string,
      films: Array<string>,
      birth_year: string,
      starships: Array<string>,
      species: Array<string>,
      edited: string,
      mass: string,
      hair_color: string,
      homeworld: string,
      eye_color: string,
    },
  },
}
const CharacterDetails = ({ data }: Props) => {
  const [background, planetName] = useImport(data.people.homeworld)
  const [avatar] = useImport(data.people.url)
  const keys = pick(data.people, [
    'skin_color',
    'mass',
    'height',
    'hair_color',
    'eye_color',
    'birth_year',
  ])

  function getDescription() {
    return Object.keys(keys).map(item => {
      const key = `${startCase(item)} : `
      const value = data.people[item]

      if (value === 'n/a' || value === 'unknown') return null

      return (
        <Description key={item}>
          <span>{key}</span>
          <span>{value}</span>
        </Description>
      )
    })
  }

  if (!background || !avatar) return null

  return (
    <Wrapper>
      <Character>
        <img src={avatar} alt="Avatar character" />
        <span>{data.people.name}</span>
      </Character>

      <WrapperDescription>
        <div>{getDescription()}</div>
        <TabBar
          contents={{
            films: get(data, 'people.films'),
            starships: get(data, 'people.starships'),
            vehicles: get(data, 'people.vehicles'),
          }}
        />
      </WrapperDescription>

      <Planet>
        <img src={background} alt="planet" />
        <span>{planetName}</span>
      </Planet>
    </Wrapper>
  )
}

export default CharacterDetails
