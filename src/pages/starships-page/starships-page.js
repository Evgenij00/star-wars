import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { transformStarship } from '../../utils'
import { getAllStarships, getStarship, getStarshipImage } from '../../service'
import { RandomPlanet, Spinner, Starship } from '../../components'

import { palette } from '../../data'

export const StarshipsPage = () => {
  const { id } = useParams()
  const history = useHistory()

  const [starships, setStarships] = useState(null)
  const [starship, setStarship] = useState(null)
  const [starshipImage, setStarshipImage] = useState(null)
  const [loading, setLoading] = useState(false)

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
        setLoading(true)
        const { data } = await getStarship(id)
        setStarship(transformStarship(data))
        setStarshipImage(getStarshipImage(id))
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
          <Title>All Starships</Title>

          {starships ? (
            <List>
              {starships.map(item => (
                <Item key={item.id} onClick={() => history.push(`/starships/${item.id}`)}>
                  <span>
                    {item.name} - ({item.model})
                  </span>
                </Item>
              ))}
            </List>
          ) : (
            <Spinner />
          )}
        </ListContainer>

        {loading ? (
          <Spinner />
        ) : starship && starshipImage ? (
          <Starship starship={starship} image={starshipImage} />
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
