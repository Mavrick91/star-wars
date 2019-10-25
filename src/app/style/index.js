// @flow
import starjedi from 'app/resources/fonts/starjedi.ttf'
import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const theme = {
  colors: { ...colors },
}

export default createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
    font-family: Helvetica,serif;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    min-width: 1200px;
    overflow: hidden;
  }
  
  #root {
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)
  }

  @font-face {
  font-family: 'starjedi';
  src: url(${starjedi});
}
`
