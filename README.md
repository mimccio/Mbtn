<img src="https://github.com/mimccio/Mbtn/blob/master/settings/logo/mbtn-logo.png" alt="Mbtn logo" title="mbtn" align="middle" width="150" height='150' />

Easy to use and hightly customisable buttons made with [styled-components](https://github.com/styled-components/styled-components) :nail_care:



1. Copy the repo and paste it in your src folder
2. Add styled-components to package.json

```b
yarn add styled-components
```



## User Guide

[TOC]

### Usage

#### Basic

```javascript
import React from 'react'
import Mbtn from '../m-btn'

export const (props) => (
	<div>
  		<Mbtn success light content='Save'/>
  		<Mbtn danger light content='Cancel'/>
  	</div>
)

```
#### Set Background Color

In order for the shadows to match the background set the color of the background wit the method setBackgroundColor() and pass the context.

##### Set the color of the background with setBackgroundColor().

setBackgroundColor() accept two arguments:

- color
- nuance

```javascript
setBackgroundColor(color, nuance)
```

and return and object :

```javascript
bg = {
  color: nuancedColor,
  shadow: {
    light: shadowColorLight,
    dark: shadowColorDark
  }
}
```

##### Pass the context

Pass the `bg` object as the context

```javascript
const bg = setBackground('grey', 'lighter')

Content.childContextTypes = {
  bg: PropTypes.object
}
```

For more information on context see the [React docs](https://facebook.github.io/react/docs/context.html)

### Properties

| Name       | Type             | Default               | Description                              |
| :--------- | ---------------- | --------------------- | ---------------------------------------- |
| content    | PropTypes.string |                       | Button content                           |
| icon       | PropTypes.bool   |                       | Change button content to icon content    |
| iconClass  | PropTypes.string | 'material-icons'      | Icon class (ex: 'fa fa-hand-peace-o')    |
|            |                  |                       |                                          |
| primary    | PropTypes.bool   |                       | color                                    |
| info       | PropTypes.bool   |                       | color                                    |
| warning    | PropTypes.bool   |                       | color                                    |
| success    | PropTypes.bool   |                       | color                                    |
| danger     | PropTypes.bool   |                       | color                                    |
| grey       | PropTypes.bool   | true                  | color                                    |
|            |                  |                       |                                          |
| lighter    | PropTypes.bool   |                       | nuance                                   |
| light      | PropTypes.bool   |                       | nuance                                   |
| main       | PropTypes.bool   | true                  | nuance                                   |
| dark       | PropTypes.bool   |                       | nuance                                   |
| darker     | PropTypes.bool   |                       | nuance                                   |
|            |                  |                       |                                          |
| accent     | PropTypes.string |                       | only light, main and dark nuances        |
|            |                  |                       |                                          |
| bold       | PropTypes.bool   |                       | bold font                                |
| textColor  | PropTypes.string | backgroundColor       | text color (choose between colors or css colors) |
| textNuance | PropTypes.string | backgroundColorNuance | text color nuance ( if textColor, choose between nuances) |

### Exemple

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Mbtn, { setBackground } from '../m-btn'

const bg = setBackground('grey', 'lighter')

const Wrapper = styled.div`
  height: 400px;
  background-color: ${bg.color};
`

export default class Content extends Component {

  getChildContext () {
    return {
      bg: bg
    }
  }

  render () {
    return (
      <Wrapper>
		<Mbtn primary bold content='hello' />
        <Mbtn icon info accent textColor='info' textNuance='dark' content='query_builder' />
        <Mbtn icon color='#4DD0E1' textColor='PaleVioletRed' content='lock_open' />
        <Mbtn icon color='#3B5998' iconClass='fa fa-facebook' />
      </Wrapper>
    )
  }

}

Content.childContextTypes = {
  bg: PropTypes.object
}

```
