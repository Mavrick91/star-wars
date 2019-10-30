import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 40px;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;

    li {
      display: inline-block;
      color: white;
      height: 40px;
      width: 40px;
    }

    .page {
      margin: 0 5px;
      border-radius: 50%;
      background: radial-gradient(ellipse at bottom, #243447 0%, #181b28 100%);
      user-select: none;
      outline: none;
      transition: filter 0.4s, transform 0.4s;

      &:hover {
        cursor: pointer;
        filter: brightness(1.8) contrast(0.8);
      }

      a {
        width: 100%;
        outline: none;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .selected {
      filter: brightness(1.8) contrast(0.8);
    }

    .break {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        outline: none;
      }
    }
  }
`
