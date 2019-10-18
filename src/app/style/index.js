import { createGlobalStyle } from 'styled-components'
import starjedi from 'app/resources/fonts/starjedi.ttf'
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
    overflow-x: hidden;
  }

  @font-face {
  font-family: 'starjedi';
  src: url(${starjedi});
}
`
