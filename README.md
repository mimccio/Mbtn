<a href='http://mbtn.surge.sh/'>
  <img alt="styled-components" src="https://raw.githubusercontent.com/mimccio/Mbtn/master/logo/mbtn-logo.png" height="150px" />
</a>


Easy to use and hightly customisable button made with [styled-components](https://github.com/styled-components/styled-components) :nail_care:

```
yarn add m-btn
```

[![npm](https://img.shields.io/npm/v/m-btn.svg)](https://www.npmjs.com/package/m-btn)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/mimccio/mbtn)

## User Guide

- [Usage](#usage)
  - [Basic](#basic)
  - [Set Background Color](#set-background-color)
- [Properties](#properties)
- [Configuration](#configuration)
  - [setting-values](#setting-values)
    - [Choices](#choices)
- [Exemple](#exemple)
- [Easy Start](#easy-start)

### Usage

#### Basic

```javascript
import React from 'react'
import Mbtn from 'm-btn'

export const (props) => (
	<div>
  		<Mbtn success light content='Save'/>
  		<Mbtn danger light content='Cancel'/>
  	</div>
)

```


#### Set Background Color

In order for the shadows to match the background set the color of the background with the method setBackgroundColor() and pass the context.

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

const backgroundColor = bg.color

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



### Configuration

Change default configurations in m-btn/config directory:

- Color Palette

- Style config

- Background config

###### Accessing default values

You can import the settings and use those value when you need

```javascript
import { palette } from 'm-btn'

const color = palette.primary.light
```



#### Setting values

| Name          | Type             | Exemple                                  | Choices                   |
| ------------- | ---------------- | ---------------------------------------- | ------------------------- |
| palette       | PropTypes.object | `const color = palette.primary.main `    | *Colors*                  |
|               |                  |                                          |                           |
| fontSize      | PropTypes.object | `const myFontSize = fontSize.heading2 `  | *Font Sizes* (px)         |
| fontSizeValue | PropTypes.object | ``const myFontSize =`${fontSizeValue.bodyBig}px` `` | *Font Sizes* (num)        |
|               |                  |                                          |                           |
| spacing       | PropTypes.object | `const mySpace = spacing.small`          | *Size*s                   |
| diametre      | PropTypes.object | `const mySpace = spacing.small`          | *Size*s (no huge or tiny) |
| baseRadius    | PropTypes.string | `const myRadius = baseRadius`            |                           |
|               |                  |                                          |                           |
| setBackground | PropTypes.func   | `const bg = setBackground('primary', 'light')` |                           |
|               |                  |                                          |                           |



##### Choices

| Colors  | Nuances | Font Sizes  | Sizes |
| ------- | ------- | ----------- | ----- |
| primary | main    | heading1    | base  |
| info    | light   | heading2    | small |
| warning | lighter | heading3    | big   |
| success | dark    | heading4    | tiny  |
| danger  | darker  | bodyHuge    | huge  |
| grey    |         | bodyBig     |       |
|         |         | body        |       |
|         |         | bodySmall   |       |
|         |         | bodyTiny    |       |
|         |         | rem.*Sizes* |       |


### Exemple

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Mbtn, { setBackground, fontSize, palette } from 'm-btn'

const bg = setBackground('grey', 'lighter')

const Wrapper = styled.div`
  background-color: ${bg.color};
  font-size: ${fontSize.bodyBig};
  color: ${palette.info.light};
`

export default class Content extends Component {

  getChildContext () {
    return { bg: bg }
  }

  render () {
    return (
      <Wrapper>
      	<p>I love Styled Components</p>
        <Mbtn
          primary
          bold
          content='hello' />
        <Mbtn
          icon
          info
          accent
          textColor='info'
          textNuance='dark'
          content='query_builder'
        />
        <Mbtn
          icon
          color='#4dd0e1'
          textColor='PaleVioletRed'
          content='lock_open'
        />
        <Mbtn
        icon
        warning
        dark
        iconClass='fa fa-facebook' />
      </Wrapper>
    )
  }

}

Content.childContextTypes = {
  bg: PropTypes.object
}
```
### Easy Start

1. [Create React App](#create-react-app)
2. [Add Mbtn to package.json](#add-mbtn-to-package.json)
3. [Add icons cdn](#add-icons-cdn)
4. [Replace App.js](#replace-app.js)
5. [Start your App](#start-your-app)

#### Create React App

If you d'ont have [create-react-app](https://github.com/facebookincubator/create-react-app) installed globaly go ahead an install it :

```
npm install -g create-react-app
```

##### Quick Overview

```
cd my-projects
create-react-app my-app
cd my-app/
npm start
```

For more info see the [docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

#### Add Mbtn to package.json

```
npm i m-btn --save
```

or

```
yarn add m-btn
```

#### Add icons cdn

Add Material Icons cdn in public/index.html:

```javascript
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

if you want to use FontAwesome or an other icon provider you have to add their cdn too.

#### Replace App.js

Remove what's in App.js, copy and paste the code below in App.js

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Mbtn, { setBackground, fontSize, palette } from 'm-btn'

const bg = setBackground('grey', 'lighter')

const Wrapper = styled.div`
  background-color: ${bg.color};
  color: ${palette.info.light};
  font-size: ${fontSize.bodyBig};
  text-align: center;
  min-height: 100vh;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
`

export default class Content extends Component {

  getChildContext () {
    return { bg: bg }
  }

  render () {
    return (
      <Wrapper>
      	<p>I love &lt;Mbtn /&gt; and Styled Components</p>
        <Mbtn
          primary
          bold
          content='Hello' />
        <Mbtn
          icon
          info
          accent
          textColor='info'
          textNuance='dark'
          content='favorite'
        />
      </Wrapper>
    )
  }

}

Content.childContextTypes = {
  bg: PropTypes.object
}
```
##### Start your App

If it's not already running start your app:

```
npm Start
```
