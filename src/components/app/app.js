import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import 'normalize.css'

const gif = require('../../assets/images/main.gif')

import { Header, Footer, Preview, RandomPlanet } from '../../components'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../../pages'
import { palette } from '../../palette'

export const App = () => {
  return (
    <BrowserRouter>
      <MainBlock>
        <InnerContainer>
          <Header />

          <Switch>
            <Route exact path="/" component={Preview} />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets/:id?" component={PlanetsPage} />
            <Route path="/starships/:id?" component={StarshipsPage} />
          </Switch>
        </InnerContainer>
        <Footer />
      </MainBlock>
    </BrowserRouter>
  )
}

const MainBlock = styled.div`
  background-color: ${palette.mainBackground};
  min-height: 100vh;
  color: ${palette.color};
  font-family: 'Roboto', sans-serif;
`

const InnerContainer = styled.div`
  width: 930px;
  margin: 0 auto;
  padding: 20px 40px;

  @media (max-width: 930px) {
    width: 768px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`

const Images = styled.img`
  width: 100%;
  border-radius: 1rem;
`
