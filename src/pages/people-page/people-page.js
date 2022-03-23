import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import './people-page.css'

import { transformPerson } from '../../utils'
import { getAllPeople, getPerson, getPersonImage } from '../../service'

export const PeoplePage = () => {
  const { id } = useParams()
  const history = useHistory()

  const [people, setPeople] = useState([])
  const [person, setPerson] = useState(null)
  const [personImage, setPersonImage] = useState(null)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const { data } = await getAllPeople()
        setPeople(data.results.map(item => transformPerson(item)))
      } catch (e) {
        console.warn(e)
      }
    }

    sendRequest()
  }, [])

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const { data } = await getPerson(id)
        setPerson(transformPerson(data))
        setPersonImage(getPersonImage(id))
      } catch (e) {
        console.warn(e)
      }
    }

    if (id) sendRequest()
  }, [id])

  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ul className="item-list list-group">
          {people.map(item => (
            <li
              className="list-group-item"
              key={item.id}
              onClick={() => history.push(`/people/${item.id}`)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {person && personImage && (
        <div className="col-md-6">
          <div className="item-details card">
            <img className="item-image" src={personImage} alt="item" />

            <div className="card-body">
              <h4>{person.name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Gender</span>
                  <span>{person.gender}</span>
                </li>

                <li className="list-group-item">
                  <span className="term">Eye Color</span>
                  <span>{person['eye_color']}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
