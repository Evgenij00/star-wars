import React, { useState, useEffect } from 'react'
import { getAllPeople } from '../services/swapi-service'
import { transformPerson } from '../utils/transform'

export const PeoplePage = () => {
  const [people, setPeople] = useState([])

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

  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ul className="item-list list-group">
          {people.map(item => (
            <li className="list-group-item" key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
