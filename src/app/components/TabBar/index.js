// @flow

import { getCategoryAndValue } from 'app/utils'
import { capitalize } from 'lodash'
import React from 'react'
import { Container, Information, InnerTab, Tab, Wrapper } from './TabBar.styled'

type Props = {
  contents: {
    [key: string]: Array<string>,
  },
}

const TabBar = ({ contents }: Props) => {
  const [activeTab, setActiveTab] = React.useState(Object.keys(contents)[0])
  const [films, setFilms] = React.useState(null)
  const [vehicles, setVehicles] = React.useState(null)
  const [starships, setStarships] = React.useState(null)

  const initializeContent = React.useCallback(() => {
    Object.keys(contents).map(key => {
      const componentPromise = contents[key].map(item => {
        const { category, value } = getCategoryAndValue(item)

        return import(`app/resources/images/${category}/${value}.png`).then(
          res => (
            <Container key={value}>
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
      })
    })
  }, [contents])

  React.useEffect(() => {
    initializeContent()
  }, [initializeContent])

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
      </Information>
    </Wrapper>
  )
}

export default TabBar
