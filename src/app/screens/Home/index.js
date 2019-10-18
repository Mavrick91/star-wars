import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

function Home() {
  return (
    <Wrapper>
      <Link to="peoples">peoples</Link>
      <Link to="films">films</Link>
      <Link to="species">species</Link>
      <Link to="planets">planets</Link>
      <Link to="vehicles">vehicles</Link>
      <Link to="starships">starships</Link>
    </Wrapper>
  )
}

export default Home
