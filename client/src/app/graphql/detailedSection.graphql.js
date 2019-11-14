import { gql } from 'apollo-boost'

export const DETAILED_SECTION_QUERY = gql`
  query Section($id: Int!, $category: String) {
    detailedSection(id: $id, category: $category) {
      ... on People {
        vehicles
        films
        starships
        species
        height
        gender
        skin_color
        birth_year
        mass
        hair_color
        eye_color
        url
      }
      ... on Film {
        starships
        vehicles
        planets
        species
        characters
        producer
        director
        release_date
        created
        edited
        url
      }
      ... on Planet {
        residents
        films
        url
        population
        edited
        climate
        rotation_period
        diameter
        gravity
        terrain
      }
      ... on Vehicle {
        films
        pilots
        url
        passengers
        model
        cargo_capacity
        max_atmosphering_speed
        crew
        vehicle_class
      }
      ... on Starship {
        pilots
        films
        url
        passengers
        starship_class
        model
        consumables
        MGLT
        consumables
        manufacturer
      }
      ... on Specie {
        people
        films
        url
        language
        classification
        average_height
        created
        average_lifespan
        skin_colors
        language
      }
    }
  }
`
