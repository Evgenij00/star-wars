import React, { useEffect, useState } from 'react'

import './random-planet.css'

import { Spinner } from '../spinner'
import { ErrorIndicator } from '../error-indicator'

import { getPlanet } from '../../service'
import { transformPlanet } from '../../utils'

export const RandomPlanet = () => {
  const interval = 5000

  const [planet, setPlanet] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    updatePlanet()
    const timeout = setInterval(updatePlanet, interval)
    return () => clearInterval(timeout)
  }, [])

  const onPlanetLoaded = planet => {
    setPlanet(planet)
    setLoading(false)
    setError(false)
  }

  const onError = err => {
    setPlanet(planet)
    setLoading(false)
    setError(true)
  }

  const updatePlanet = async () => {
    try {
      const id = Math.floor(Math.random() * 17) + 2
      const { data } = await getPlanet(id)
      onPlanetLoaded(transformPlanet(data))
    } catch (e) {
      onError()
    }
  }

  const hasData = !(loading || error)

  const errorMessage = error ? <ErrorIndicator /> : null
  const spinner = loading ? <Spinner /> : null
  const content = hasData ? <PlanetView planet={planet} /> : null

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  )
}

const PlanetView = ({ planet }) => {
  console.log(planet)

  const { id, name, population, rotationPeriod, diameter } = planet

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}