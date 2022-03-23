import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'normalize.css'
import './app.css'

import { Header } from '../header'
import { PeoplePage } from '../../pages'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="stardb-app">
        <Header />
        <Switch>
          <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />

          <Route path="/people/:id?" component={PeoplePage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
