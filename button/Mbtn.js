import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StandardButton from './StandardButton'
import IconButton from './IconButton'
import { defaultTextColor } from '../index'
import {
  defineColor,
  defineTextColor,
  defineIconClass,
  defineContent,
  defineFontWeight,
  defineShadowColorLight,
  defineShadowColorDark
} from '../helpers'

export default class Mbtn extends Component {

  render () {
    const color = defineColor(this.props)

    const iconClassName = defineIconClass(this.props)
    const content = defineContent(this.props)
    const fontWeigth = defineFontWeight(this.props)
    const shadowColorLight = this.context.shadowColorLight
    const shadowColorDark = this.context.shadowColorDark
    const textColor = defineTextColor(this.props, this.context.color)

    const buttonType = this.props.icon ? IconButton : StandardButton

    const Mbtn = styled(buttonType)`

    font-weight: ${fontWeigth};
    background-color: ${color};
    color: ${textColor};
    border: none;
    box-shadow: 0 3px 8px ${shadowColorLight};

    &:hover {
      color: ${color};
      text-shadow:
        0 1px 2px ${shadowColorDark},
        0 2px 5px ${shadowColorLight};
    }

    &:hover:after {
      box-shadow:
        -2px 2px 5px ${shadowColorDark},
        -2px 5px 20px ${shadowColorLight};
      border-color: ${color};
    }

    &:active:before {
      transform: scale(1.1);
    }
  `

    return (
      <Mbtn className={iconClassName} aria-hidden='true'>
        {content}
      </Mbtn>
    )
  }
}

Mbtn.contextTypes = {
  color: PropTypes.string,
  shadowColorLight: PropTypes.string,
  shadowColorDark: PropTypes.string
}
