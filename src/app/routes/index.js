// @flow
import TopBar from 'app/components/TopBar'
import Home from 'app/screens/Home'
import Peoples from 'app/screens/Peoples'
import CharacterDetails from 'app/screens/Peoples/sub pages/CharacterDetails'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: calc(100% - 73px);
  padding: 30px;
`

function Routes() {
  return (
    <BrowserRouter>
      <TopBar />
      <Wrapper>
        <Switch>
          <Route path="/peoples/:idCharacter" component={CharacterDetails} />
          <Route path="/peoples" component={Peoples} />
          <Route path="/" component={Home} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}

export default Routes
