import styled, { css } from 'styled-components'

export default styled.div`
  ${({
    size,
    centerVertically,
    centerHorizontally,
    right,
    bottom,
    top,
    left,
    noAnim,
    theme: { colors },
  }) => {
    let tmpSize = null
    const cVertically =
      centerVertically &&
      css`
        top: 50%;
        transform: translateY(-50%);
      `
    const cHorizontally =
      centerHorizontally &&
      css`
        left: 50%;
        transform: translateX(-50%);
      `

    switch (size) {
      case 'sm':
        tmpSize = '25px'
        break
      case 'md':
        tmpSize = '40px'
        break
      default:
        tmpSize = '65px'
    }

    return css`
      cursor: pointer;
      user-select: none;
      position: absolute;
      ${bottom && `bottom: ${bottom}px`};
      ${right && `right: ${right}px`};
      ${left && `left: ${left}px`};
      ${top && `top: ${top}px`};
      width: ${tmpSize};
      height: ${tmpSize};
      background: linear-gradient(190deg, ${colors.blueDark} 5%, ${colors.blueDark1} 95%);
      border-radius: 50em;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: filter 0.4s, transform 0.4s;
      ${cVertically};
      ${cHorizontally};

      &:hover {
        filter: brightness(1.8) contrast(0.8);
        transform: ${!noAnim ? 'scale(0.96)' : ''};
      }

      img {
        width: 60%;
      }
    `
  }}
`
