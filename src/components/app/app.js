import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import 'normalize.css'

import { Header, Footer, Preview } from '../../components'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../../pages'
import { palette } from '../../data/palette'

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
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;

  @media (max-width: 930px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 24px;
  }
`
