/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema'

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
})

server.listen(process.env.PORT || '4000').then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
