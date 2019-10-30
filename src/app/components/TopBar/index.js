// @flow
import Slider from 'app/components/Slider'
import React from 'react'
import type { ContextRouter } from 'react-router'
import { withRouter } from 'react-router'
import { StyledLink, Wrapper } from './TopBar.styled'

type Props = $Shape<ContextRouter>

function TopBar({ location: { pathname } }: Props) {
  const liRef = React.useRef(null)
  const [slider, setSlider] = React.useState({ left: 0, width: 0 })
  const sections = [
    'peoples',
    'films',
    'species',
    'planets',
    'vehicles',
    'starships',
  ]

  React.useEffect(() => {
    setupBar(liRef.current)
  }, [])

  function setupBar(element) {
    const left = element ? element.getBoundingClientRect().left : 0
    const width = element ? element.getBoundingClientRect().width : 0

    setSlider({ left, width })
  }

  return (
    <Wrapper>
      <Slider style={slider} />
      {sections.map(section => (
        <StyledLink
          to={`/${section}`}
          ref={pathname.includes(section) ? liRef : null}
          key={section}
          isactive={pathname.includes(section) ? liRef : null}
          onClick={e => setupBar(e.currentTarget)}
        >
          {section}
        </StyledLink>
      ))}
    </Wrapper>
  )
}

export default withRouter<Props>(TopBar)
