// @flow

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import Routes from 'app/routes'
import GlobalStyle, { theme } from 'app/style'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from './fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const client = new ApolloClient({
  uri: 'http://localhost:4000',
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
