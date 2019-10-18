import React from 'react'
import ApolloClient from 'apollo-boost'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import Routes from 'app/routes'
import GlobalStyle, { theme } from 'app/style'

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
