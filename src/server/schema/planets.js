import { gql } from 'apollo-server'
import axios from 'axios'

const endpoint = 'planets'

export const typeDefs = gql`
  type Planet {
    created: String
    population: String
    orbital_period: String
    rotation_period: String
    url: String
    terrain: String
    diameter: String
    gravity: String
    climate: String
    edited: String
    residents: [String]
    name: String
    films: [String]
    surface_water: String
  }

  type Planets {
    count: Int
    results: [Planet]
    previous: String
    next: String
  }

  extend type Query {
    planets: Planets
    planet(id: Int): Planet
  }
`

export const resolver = {
  planets() {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/`)
      .then(({ data }) => data)
  },
  planet(_, { id }) {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/${id}/`)
      .then(({ data }) => data)
  },
}
