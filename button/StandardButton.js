import styled from 'styled-components'

import { fontSize, baseRadius, spacing } from '../settings/styleSettings'
import GlobalButton from './GlobalButton'

const StandardButton = styled(GlobalButton)`
  font-size: ${fontSize.bodySmall};
  width: 4.2rem;
  height: 1.6rem;
  border-radius: ${baseRadius};

  &:before {
    border-radius: ${baseRadius};
  }

  &:after {
    border-radius: ${baseRadius};
  }

  @media (min-width:641px) {
    font-size: ${fontSize.body};

    width: 7rem;
    height: 2.5rem;

  }

  @media (min-width:881px) {
    font-size: ${fontSize.bodyBig};
    padding: 2px;
    width: 9rem;
    height: 3.1rem;

  }
`
export default StandardButton
