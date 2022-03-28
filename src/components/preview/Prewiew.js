import React from 'react'
import styled from 'styled-components'

import 'normalize.css'

const gif = require('../../assets/images/main.gif')

export const Preview = () => {
  return <Images src={gif} alt="preview" />
}

const Images = styled.img`
  width: 100%;
  border-radius: 1rem;
`
