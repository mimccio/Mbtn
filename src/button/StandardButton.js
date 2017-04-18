import styled from 'styled-components'

import { fontSize, baseRadius } from '../settings/styleSettings'
import GlobalButton from './GlobalButton'

const StandardButton = styled(GlobalButton)`
  font-size: ${fontSize.bodySmall};
  width: 4.6rem;
  height: 1.6rem;
  border-radius: ${baseRadius};
  transition:
    transform .2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:before {
    border-radius: ${baseRadius};
  }

  &:after {
    border-radius: ${baseRadius};
  }

  @media (min-width:641px) {
    font-size: ${fontSize.body};

    width: 6.8rem;
    height: 2.4rem;

    &:hover {
      transform: scale(1);
    }

  }

  @media (min-width:881px) {
    font-size: ${fontSize.bodyBig};
    padding: 2px;
    width: 8rem;
    height: 2.9rem;

    &:hover {
      transform: scale(1);
    }
  }
`
export default StandardButton
