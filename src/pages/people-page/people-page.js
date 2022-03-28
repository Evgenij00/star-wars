import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { transformPerson } from '../../utils'
import { getAllPeople, getPerson, getPersonImage } from '../../service'
import { Person, RandomPlanet, Spinner } from '../../components'
import { palette } from '../../data'

export const PeoplePage = () => {
  const history = useHistory()
  const { id } = useParams()

  const [people, setPeople] = useState(null)
  const [person, setPerson] = useState(null)
  const [personImage, setPersonImage] = useState(null)
  const [loading, setLoading] = useState(false)

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
        setLoading(true)
        const { data } = await getPerson(id)
        setPerson(transformPerson(data))
        setPersonImage(getPersonImage(id))
        setLoading(false)
      } catch (e) {
        console.warn(e)
      }
    }

    if (id) sendRequest()
  }, [id])

  return (
    <main>
      <RandomPlanet />
      <Container>
        <ListContainer>
          <Title>All People</Title>

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

        {loading ? (
          <Spinner />
        ) : person && personImage ? (
          <Person person={person} image={personImage} id={id} />
        ) : (
          <Message>Select a character from the list</Message>
        )}
      </Container>
    </main>
  )
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
  min-height: 476px;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`

const ListContainer = styled.section`
  background-color: ${palette.blockBackground};
  border-radius: 0.25rem;
  width: 50%;

  @media (max-width: 930px) {
    width: 100%;
    order: 1;
  }
`

const Title = styled.h1`
  color: ${palette.orange};
  padding: 20px 20px 10px;
  margin: 0;
  font-size: 20px;
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
    transition: background-color 2ms;
  }
`

const Message = styled.p`
  padding-top: 20px;
  color: ${palette.green};
`
