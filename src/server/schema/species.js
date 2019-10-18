import { gql } from 'apollo-server'
import axios from 'axios'

const endpoint = 'species'

export const typeDefs = gql`
  type Specie {
    skin_colors: String
    language: String
    url: String
    average_lifespan: String
    designation: String
    created: String
    edited: String
    eye_colors: String
    name: String
    hair_colors: String
    classification: String
    homeworld: String
    people: [String]
    average_height: String
    films: [String]
  }

  type Species {
    count: Int
    results: [Specie]
    previous: String
    next: String
  }

  extend type Query {
    species: Species
    specie(id: Int): Specie
  }
`

export const resolver = {
  species() {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/`)
      .then(({ data }) => data)
  },
  specie(_, { id }) {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/${id}/`)
      .then(({ data }) => data)
  },
}
