import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'

import { transformPlanet } from '../../utils'
import { getAllPlanets, getPlanet, getPlanetImage } from '../../service'
import { RandomPlanet, Spinner } from '../../components'
import { Planet } from '../../components/planet/planet'
import { palette } from '../../palette'

export const PlanetsPage = () => {
  const { id } = useParams()
  const history = useHistory()

  const [planets, setPlanets] = useState(null)
  const [planet, setPlanet] = useState(null)
  const [planetImage, setPlanetImage] = useState(null)
  const [loading, setLoading] = useState(false)

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
        setLoading(true)
        setPlanet(null)
        const { data } = await getPlanet(id)
        setPlanet(transformPlanet(data))
        setPlanetImage(getPlanetImage(id))
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
          <Title>All Planets</Title>

          {planets ? (
            <List>
              {planets.map(item => (
                <Item key={item.id} onClick={() => history.push(`/planets/${item.id}`)}>
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
        ) : planetImage && planetImage ? (
          <Planet planet={planet} image={planetImage} />
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
