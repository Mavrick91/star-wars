// @flow

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import Routes from 'app/routes'
import GlobalStyle, { theme } from 'app/style'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import introspectionQueryResultData from './fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const { NODE_ENV, REACT_APP_GRAPHQL_URI } = process.env
const isNotProduction = NODE_ENV !== 'production'

const uri = isNotProduction
  ? 'http://localhost:4000/graphql'
  : REACT_APP_GRAPHQL_URI
const httpLink = createHttpLink({ uri })

console.log('uri', uri)
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    fragmentMatcher,
  }),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
