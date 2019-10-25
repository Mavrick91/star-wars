import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.yellow};
    position: relative;
    overflow-x: hidden;
    height: calc(100% - 73px);

    #board {
      font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
      transform: perspective(300px) rotateX(25deg);
      transform-origin: 50% 100%;
      text-align: justify;
      position: absolute;
      margin-left: -9em;
      font-weight: bold;
      overflow: hidden;
      font-size: 350%;
      height: 50em;
      width: 18em;
      bottom: 0;
      left: 50%;
    }

    #board:after {
      position: absolute;
      content: ' ';
      bottom: 60%;
      left: 0;
      right: 0;
      top: 0;
    }

    #content {
      animation: scroll 100s linear 16s;
      position: absolute;
      top: 100%;
    }

    #title,
    #subtitle {
      text-align: center;
    }

    @keyframes scroll {
      0% {
        top: 100%;
      }
      100% {
        top: -170%;
      }
    }
  `}
`
export const Logo = styled.div`
  margin: auto;
  text-align: center;
  width: 100%;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  will-change: transform;

  img {
    width: 80%;
    opacity: 0;
    animation: logo 16s 4.5s;
  }

  @keyframes logo {
    from {
      width: 80%;
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    to {
      width: 3%;
      opacity: 0;
    }
  }
`

export const StyledSection = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;
  animation: intro 3s ease-out 1s;
  color: rgb(75, 213, 238);
  font-weight: 400;
  font-size: 300%;
  opacity: 0;

  @keyframes intro {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
