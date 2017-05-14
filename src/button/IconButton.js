import styled from 'styled-components'

import { diametre, fontSize } from '../settings/styleSettings'
import GlobalButton from './GlobalButton'
import { defineRotationDirection } from '../helpers'

const rotationDirection = defineRotationDirection(1, 3) === 1 ? '-90deg' : '90deg'

const IconButton = styled(GlobalButton)`
  font-size: ${fontSize.rem.small};
  text-rendering: optimizeLegibility;
  height: ${diametre.small};
  width: ${diametre.small};
  border-radius: 50%;
  padding: 0;
  transition:
    transform .5s ease;

  &:hover {
    transform: rotate(${rotationDirection});
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
