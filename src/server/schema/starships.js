import { gql } from 'apollo-server'
import axios from 'axios'

const endpoint = 'starships'

export const typeDefs = gql`
  type Starship {
    created: String
    consumables: String
    url: String
    cost_in_credits: String
    pilots: [String]
    starship_class: String
    MGLT: String
    manufacturer: String
    films: [String]
    crew: String
    length: String
    name: String
    max_atmosphering_speed: String
    model: String
    hyperdrive_rating: String
    cargo_capacity: String
    passengers: String
    edited: String
  }

  type Starships {
    count: Int
    results: [Starship]
    previous: String
    next: String
  }

  extend type Query {
    starships: Starships
  }
`

export const resolver = {
  starships() {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/`)
      .then(({ data }) => data)
  },
}
