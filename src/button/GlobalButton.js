import styled from 'styled-components'

// eslint-disable-next-line
import globalStyles from './globalStyles'

const GlobalButton = styled.button`

  box-sizing: border-box;
  text-decoration: none;
  position: relative;
  margin: 3px;

  &:hover {
    background-color: transparent;
    cursor: pointer;
    box-shadow: none;
  }

  &:after {
    box-sizing: border-content;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -2px;
    left: -2px;
    border: solid 2px;
    border-color: transparent;
    transform: scale(.7);
    transition:
      transform .2s ease;
  }

  &:hover:after {
    transform: scale(1);
  }

  &:focus {
    outline: none;
  }

  &:active:after {
    transform: scale(1.1);
  }

  @media (min-width:641px) {
    margin: 5px;
  }

  @media (min-width:881px) {
    margin: 8px;

    &:after {
      border-width: 3px;
      top: -3px;
      left: -3px;
    }
  }
`

export default GlobalButton
