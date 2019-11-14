import { gql } from 'apollo-boost'

export const SECTION_QUERY = gql`
  query Section($page: Int, $category: String) {
    section(page: $page, category: $category) {
      count
      next
      previous
      results {
        ... on People {
          url
        }
        ... on Film {
          url
        }
        ... on Planet {
          url
        }
        ... on Vehicle {
          url
        }
        ... on Starship {
          url
        }
        ... on Specie {
          url
        }
      }
    }
  }
`
