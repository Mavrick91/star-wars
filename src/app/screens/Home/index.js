// @flow

import MainButton from 'app/components/MainButton'
import logo from 'app/resources/images/logo.png'
import starWarsIntro from 'app/resources/song/start wars intro.mp4'
import volumeOff from 'app/resources/svg/volume off.svg'
import volumeUp from 'app/resources/svg/volume up.svg'
import useAudio from 'app/utils/customHooks/useAudio'
import useCookie from 'app/utils/customHooks/useCookie'
import React from 'react'
import { Logo, StyledSection, Wrapper } from './Home.styled'

function Home() {
  const { value, setCookie } = useCookie('isVolumeOffAudio', false)

  useAudio(starWarsIntro, {
    delay: 4200,
    isMuted: !!value,
  })

  return (
    <Wrapper>
      <div id="stars" />
      <StyledSection>
        A long time ago, in a galaxy far,
        <br /> far away....
      </StyledSection>
      <Logo>
        <img src={logo} alt="logo star wars" />
      </Logo>
      <div id="board">
        <div id="content">
          <p id="title">Episode I</p>
          <p id="subtitle">THE CODERS MENACE</p>
          <br />
          <p>
            Turmoil has engulfed the Galactic Republic as Christopher Kade finishes
            studying to become a master in his trade.
          </p>
        </div>
      </div>
      <MainButton size="lg" onClick={() => setCookie(!value)} bottom={50} right={50}>
        <img src={value === true ? volumeOff : volumeUp} alt="icon volume" />
      </MainButton>
    </Wrapper>
  )
}

export default Home
