import { gql } from 'apollo-server'
import axios from 'axios'

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

  union DetailedSection = People | Film | Planet | Specie | Starship | Vehicle

  type Section {
    count: Int
    results: [DetailedSection]
    previous: String
    next: String
  }

  type Query {
    section(page: Int, category: String): Section
    detailedSection(id: Int!, category: String): DetailedSection
  }
`

export const resolvers = {
  Query: {
    section(_, { page, category }) {
      return axios
        .get(`${process.env.REACT_APP_BASE_URL}/${category}/?page=${page}`)
        .then(({ data }) => data)
    },
    detailedSection(_, { id, category }) {
      return axios
        .get(`${process.env.REACT_APP_BASE_URL}/${category}/${id}/`)
        .then(({ data }) => data)
    },
  },
  DetailedSection: {
    __resolveType(obj) {
      if (obj.mass) return 'People'
      if (obj.episode_id) return 'Film'
      if (obj.vehicle_class) return 'Vehicle'
      if (obj.hyperdrive_rating) return 'Starship'
      if (obj.skin_colors) return 'Specie'
      if (obj.population) return 'Planet'

      return null
    },
  },
}
