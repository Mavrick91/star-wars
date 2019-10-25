// @flow
import TopBar from 'app/components/TopBar'
import Home from 'app/screens/Home'
import Peoples from 'app/screens/Peoples'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Routes() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/peoples" component={Peoples} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
