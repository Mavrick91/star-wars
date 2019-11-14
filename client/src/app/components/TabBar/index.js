// @flow

import { getCategoryAndValue } from 'app/utils'
import { capitalize } from 'lodash'
import React from 'react'
import type { RouterHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Container, Information, InnerTab, Tab, Wrapper } from './TabBar.styled'

type Props = {
  contents: {
    [key: string]: Array<string>,
  },
  history: RouterHistory,
}

const TabBar = ({ contents, history }: Props) => {
  const [activeTab, setActiveTab] = React.useState(Object.keys(contents)[0])
  const [films, setFilms] = React.useState(null)
  const [planets, setPlanets] = React.useState(null)
  const [species, setSpecies] = React.useState(null)
  const [vehicles, setVehicles] = React.useState(null)
  const [starships, setStarships] = React.useState(null)
  const [people, setPeople] = React.useState(null)

  const initializeContent = React.useCallback(() => {
    Object.keys(contents).map(key => {
      const componentPromise = contents[key].map(item => {
        const { category, value, indexCategory } = getCategoryAndValue(item)

        return import(`app/resources/images/${category}/${value}.png`).then(
          res => (
            <Container
              key={value}
              onClick={() => history.push(`/${category}/${indexCategory}`)}
            >
              <img src={res.default} alt={value} />
              <span>{value}</span>
            </Container>
          ),
        )
      })

      return Promise.all(componentPromise).then(newList => {
        const fnName = `set${capitalize(key)}`

        // improve this code
        if (fnName === 'setFilms') setFilms(newList)
        if (fnName === 'setStarships') setStarships(newList)
        if (fnName === 'setVehicles') setVehicles(newList)
        if (fnName === 'setSpecies') setSpecies(newList)
        if (fnName === 'setPlanets') setPlanets(newList)
        if (
          ['setPeople', 'setPilots', 'setResidents', 'setCharacters'].includes(
            fnName,
          )
        )
          setPeople(newList)
      })
    })
  }, [contents, history])

  React.useEffect(() => {
    initializeContent()
  }, [initializeContent])

  React.useEffect(() => {
    setActiveTab(Object.keys(contents)[0])
  }, [contents])

  return (
    <Wrapper>
      <Tab>
        {Object.keys(contents).map(
          key =>
            contents[key].length !== 0 && (
              <InnerTab
                key={key}
                onClick={() => setActiveTab(key)}
                isActive={activeTab === key}
              >
                {key}
              </InnerTab>
            ),
        )}
      </Tab>
      <Information>
        {activeTab === 'films' && films}
        {activeTab === 'starships' && starships}
        {activeTab === 'vehicles' && vehicles}
        {activeTab === 'species' && species}
        {activeTab === 'planets' && planets}
        {activeTab === 'people' && people}
        {activeTab === 'pilots' && people}
        {activeTab === 'residents' && people}
        {activeTab === 'characters' && people}
      </Information>
    </Wrapper>
  )
}

export default withRouter(TabBar)
