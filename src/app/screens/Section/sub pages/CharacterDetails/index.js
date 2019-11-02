// @flow

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import CustomLoader from 'app/components/Loader'
import React from 'react'
import type { ContextRouter } from 'react-router-dom'
import CharacterDetails from './CharacterDetails'

const CHARACTER_QUERY = gql`
  query Character($id: Int!) {
    people(id: $id) {
      name
      height
      created
      gender
      vehicles
      url
      skin_color
      films
      birth_year
      starships
      species
      edited
      mass
      hair_color
      homeworld
      eye_color
    }
  }
`
const ContainerCharacterDetails = ({ match }: ContextRouter) => {
  const { params } = match
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: {
      id: parseInt(params.idCharacter, 10),
    },
  })

  if (loading) return <CustomLoader />
  if (error) return <div>Error</div>
  if (!data) return null

  return <CharacterDetails data={data} />
}

export default ContainerCharacterDetails
