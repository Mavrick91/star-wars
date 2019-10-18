import { gql } from 'apollo-server'
import axios from 'axios'

const endpoint = 'films'

export const typeDefs = gql`
  type Film {
    starships: [String]
    created: String
    vehicles: [String]
    url: String
    release_date: String
    edited: String
    planets: [String]
    species: [String]
    director: String
    producer: String
    episode_id: Int
    title: String
    characters: [String]
    opening_crawl: String
  }

  type Films {
    count: Int
    results: [Film]
    previous: String
    next: String
  }

  extend type Query {
    films: Films
    film(id: Int): Film
  }
`

export const resolver = {
  films() {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/`)
      .then(({ data }) => data)
  },
  film(_, { id }) {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/${endpoint}/${id}/`)
      .then(({ data }) => data)
  },
}
