import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { transformPerson } from '../../utils'
import { getAllPeople, getPerson, getPersonImage } from '../../service'
import { Spinner } from '../../components'
import { palette } from '../../palette'
import { Person } from '../../components/person'

export const PeoplePage = () => {
  const history = useHistory()
  const { id } = useParams()

  const [people, setPeople] = useState(null)
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
        setPerson(null)
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
    <Container>
      <ListContainer>
        {people ? (
          <List>
            {people.map(item => (
              <Item key={item.id} onClick={() => history.push(`/people/${item.id}`)}>
                <span>{item.name}</span>
              </Item>
            ))}
          </List>
        ) : (
          <Spinner />
        )}
      </ListContainer>

      {person && personImage ? <Person person={person} image={personImage} /> : <Spinner />}
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`

const ListContainer = styled.div`
  background-color: ${palette.blockBackground};
  border-radius: 0.25rem;
  width: 50%;

  @media (max-width: 930px) {
    width: 100%;
  }
`

const List = styled.ul`
  border-radius: inherit;
`

const Item = styled.li`
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  border: 1px solid ${palette.border};

  &:first-of-type {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-of-type {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:hover {
    background-color: ${palette.green};
    color: ${palette.orange};
  }
`
