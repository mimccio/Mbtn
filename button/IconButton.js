import styled from 'styled-components'

import { diametre, fontSize } from '../settings/styleSettings'
import GlobalButton from './GlobalButton'

const IconButton = styled(GlobalButton)`
  font-size: ${fontSize.rem.small};
  height: ${diametre.small};
  width: ${diametre.small};
  border-radius: 50%;
  transition:
    transform .5s ease;

  &:hover {
    transform: rotate(-45deg);
  }

  &:before {
    border-radius: 50%;
  }

  &:after {
    border-radius: 50%;
  }



  @media (min-width:641px) {
    font-size: ${fontSize.rem.base};
    width: ${diametre.base};
    height: ${diametre.base};
  }

  @media (min-width:881px) {
    font-size: ${fontSize.rem.big};
    width: ${diametre.big};
    height: ${diametre.big};
  }
`
export default IconButton
