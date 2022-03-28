import React from 'react'
import styled from 'styled-components'

import 'normalize.css'

const gif = require('../../assets/images/main.gif')

export const Preview = () => {
  return (
    <Main>
      <Images src={gif} alt="preview" />
    </Main>
  )
}

const Main = styled.div`
  margin-bottom: 16px;
`

const Images = styled.img`
  width: 100%;
  border-radius: 1rem;
`
