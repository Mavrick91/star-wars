import { gql } from 'apollo-server'
import axios from 'axios'

const endpoint = 'people'

export const typeDefs = gql`
  type People {
    name: String
    height: String
    created: String
    gender: String
    vehicles: [String]
    url: String
    skin_color: String
    films: [String]
    birth_year: String
    starships: [String]
    species: [String]
    edited: String
    mass: String
    hair_color: String
    homeworld: String
    eye_color: String
  }

  type Peoples {
    count: Int
    results: [People]
    previous: String
    next: String
  }

  extend type Query {
    peoples(page: Int): Peoples
    people(id: Int!): People
  }
`

export const resolver = {
  peoples(_, { page = 1 }) {
    const pageNumber = `?page=${page}`

    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/${pageNumber}`)
      .then(({ data }) => data)
  },
  people(_, { id }) {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/${id}/`)
      .then(({ data }) => data)
  },
}
