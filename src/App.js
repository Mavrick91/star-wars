// @flow

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Routes from 'app/routes'
import GlobalStyle, { theme } from 'app/style'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
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
