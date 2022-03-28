import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { transformPlanet } from '../../utils'
import { getAllPlanets, getPlanet, getPlanetImage } from '../../service'
import { Spinner } from '../../components'

export const PlanetsPage = () => {
  const { id } = useParams()
  const history = useHistory()

  const [planets, setPlanets] = useState(null)
  const [planet, setPlanet] = useState(null)
  const [planetImage, setPlanetImage] = useState(null)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const { data } = await getAllPlanets()
        setPlanets(data.results.map(item => transformPlanet(item)))
      } catch (e) {
        console.warn(e)
      }
    }

    sendRequest()
  }, [])

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setPlanet(null)
        const { data } = await getPlanet(id)
        setPlanet(transformPlanet(data))
        setPlanetImage(getPlanetImage(id))
      } catch (e) {
        console.warn(e)
      }
    }

    if (id) sendRequest()
  }, [id])

  return (
    <div>
      <div>
        {planets ? (
          <ul>
            {planets.map(item => (
              <li key={item.id} onClick={() => history.push(`/planets/${item.id}`)}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <Spinner />
        )}
      </div>

      {planet && planetImage ? (
        <div>
          <div>
            <img src={planetImage} alt="item" />

            <div>
              <h4>{planet.name}</h4>
              <ul>
                <li>
                  <span className="term">Population</span>
                  <span>{planet.population}</span>
                </li>

                <li>
                  <span className="term">Rotation Period</span>
                  <span>{planet.rotationPeriod}</span>
                </li>

                <li>
                  <span>Diameter</span>
                  <span>{planet.diameter}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  )
}
