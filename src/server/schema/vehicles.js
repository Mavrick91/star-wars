import { gql } from 'apollo-server'
import axios from 'axios'

const endpoint = 'vehicles'

export const typeDefs = gql`
  type Vehicle {
    passengers: String
    model: String
    edited: String
    cargo_capacity: String
    url: String
    manufacturer: String
    cost_in_credits: String
    name: String
    consumables: String
    max_atmosphering_speed: String
    crew: String
    vehicle_class: String
    films: [String]
    pilots: [String]
    created: String
    length: String
  }

  type Vehicles {
    count: Int
    results: [Vehicle]
    previous: String
    next: String
  }

  extend type Query {
    vehicles: Vehicles
  }
`

export const resolver = {
  vehicles() {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/`)
      .then(({ data }) => data)
  },
}
