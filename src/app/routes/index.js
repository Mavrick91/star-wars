// @flow
import TopBar from 'app/components/TopBar'
import DetailedSection from 'app/screens/DetailedSection'
import Home from 'app/screens/Home'
import Section from 'app/screens/Section'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: calc(100% - 73px);
  padding: 30px;
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
`

function Routes() {
  return (
    <BrowserRouter>
      <TopBar />
      <Wrapper>
        <Switch>
          <Route
            path="/:category/:detailedCategoryId"
            component={DetailedSection}
          />
          <Route path="/:category" component={Section} />
          <Route path="/" component={Home} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}

export default Routes
