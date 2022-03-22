import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'normalize.css'
import './app.css'

import { Header } from '../header'
import { PeoplePage } from '../../pages'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="stardb-app">
        <Header />
        <Routes>
          <Route path="/" element={<h2>Welcome to StarDB</h2>} />

          <Route path="/people/:id" element={<PeoplePage />} />
          <Route path="/planets/:id" element={<h2>PlanetsPage</h2>} />
          <Route path="/starships/:id" exact element={<h2>StarshipsPage</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
