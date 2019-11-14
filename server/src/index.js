/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import path from 'path'
import { resolvers, typeDefs } from './schema'

const app = express()

const server = new ApolloServer({
	introspection: true,
	playground: true,
	typeDefs,
	resolvers,
	context: ({ req, res }) => ({ req, res })
})

const root = path.join(__dirname, '..', 'public')
const staticFiles = express.static(root)
const router = express.Router()

app.use(staticFiles)
app.use(router)
app.use('*', staticFiles)

server.applyMiddleware({ app })

app.get('*', (req, res) => {
	res.sendFile('index.html', { root })
})

const port = process.env.PORT || 4000

app.listen({ port }, () => {
	console.log(`🚀 Apollo server listening on http://localhost:${port}/graphql`)
})
