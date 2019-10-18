import { gql } from 'apollo-server'
import { resolver as resolverPeoples, typeDefs as typePeoples } from './peoples'
import { resolver as resolverFilms, typeDefs as typeFilms } from './films'
import { resolver as resolverPlanets, typeDefs as typePlanets } from './planets'
import { resolver as resolverSpecies, typeDefs as typeSpecies } from './species'
import {
  resolver as resolverStarships,
  typeDefs as typeStarships,
} from './starships'
import {
  resolver as resolverVehicles,
  typeDefs as typeVehicles,
} from './vehicles'

const rootQuery = gql`
  type Query {
    _root: String
  }
`

export const typeDefs = [
  rootQuery,
  typePeoples,
  typeFilms,
  typePlanets,
  typeSpecies,
  typeStarships,
  typeVehicles,
]

export const resolvers = {
  Query: {
    ...resolverPeoples,
    ...resolverFilms,
    ...resolverPlanets,
    ...resolverSpecies,
    ...resolverStarships,
    ...resolverVehicles,
  },
}
