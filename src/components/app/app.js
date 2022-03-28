import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import 'normalize.css'

import { Header, RandomPlanet } from '../../components'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../../pages'

export const App = () => {
  return (
    <BrowserRouter>
      <MainBlock>
        <InnerContainer>
          <Header />
          <RandomPlanet />

          <Switch>
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets/:id?" component={PlanetsPage} />
            <Route path="/starships/:id?" component={StarshipsPage} />
          </Switch>
        </InnerContainer>
      </MainBlock>
    </BrowserRouter>
  )
}

const MainBlock = styled.div`
  background-color: #100e19;
  min-height: 100vh;
  color: white;
  font-family: 'Roboto', sans-serif;
`

const InnerContainer = styled.div`
  width: 930px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 930px) {
    width: 768px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`
