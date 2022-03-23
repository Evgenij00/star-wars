import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'normalize.css'
import './app.css'

import { Header } from '../header'
import { PeoplePage, PlanetsPage } from '../../pages'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="stardb-app">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <h2>Welcome to Star Wars</h2>} />
          <Route path="/people/:id?" component={PeoplePage} />
          <Route path="/planets/:id?" component={PlanetsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
