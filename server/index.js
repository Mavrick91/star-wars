/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
