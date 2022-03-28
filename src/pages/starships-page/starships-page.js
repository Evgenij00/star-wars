import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { transformStarship } from '../../utils'
import { getAllStarships, getStarship, getStarshipImage } from '../../service'
import { Spinner } from '../../components'

export const StarshipsPage = () => {
  const { id } = useParams()
  const history = useHistory()

  const [starships, setStarships] = useState(null)
  const [starship, setStarship] = useState(null)
  const [starshipImage, setStarshipImage] = useState(null)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const { data } = await getAllStarships()
        setStarships(data.results.map(item => transformStarship(item)))
      } catch (e) {
        console.warn(e)
      }
    }

    sendRequest()
  }, [])

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setStarship(null)
        const { data } = await getStarship(id)
        setStarship(transformStarship(data))
        setStarshipImage(getStarshipImage(id))
      } catch (e) {
        console.warn(e)
      }
    }

    if (id) sendRequest()
  }, [id])

  return (
    <div>
      <div>
        {starships ? (
          <ul>
            {starships.map(item => (
              <li key={item.id} onClick={() => history.push(`/starships/${item.id}`)}>
                <span>
                  {item.name} ({item.model})
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <Spinner />
        )}
      </div>

      {starship && starshipImage ? (
        <div>
          <div>
            <img src={starshipImage} alt="item" />

            <div>
              <h4>{starship.name}</h4>

              <ul>
                <li>
                  <span>Model</span>
                  <span>{starship.model}</span>
                </li>

                <li>
                  <span>Length</span>
                  <span>{starship.length}</span>
                </li>

                <li>
                  <span>Cost</span>
                  <span>{starship.costInCredits}</span>
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
