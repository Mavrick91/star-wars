import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Wrapper from 'app/style/background.styled'
import Home from 'app/screens/Home'
import Peoples from 'app/screens/Peoples'

function Routes() {
  return (
    <Wrapper>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <BrowserRouter>
        <Switch>
          <Route path="/peoples" component={Peoples} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  )
}

export default Routes
