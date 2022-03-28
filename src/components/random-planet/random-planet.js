import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Spinner } from '../spinner'
import { ErrorIndicator } from '../error-indicator'

import { getPlanet } from '../../service'
import { transformPlanet } from '../../utils'
import { palette } from '../../palette'
import { Tooltip } from '../tooltip'
import { tooltips } from '../../tolltips'

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
    <div>
      {errorMessage}
      {spinner}
      {content}
    </div>
  )
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet

  return (
    <Container>
      <Image src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />

      <Table>
        <Caption>{name}</Caption>

        <Body>
          <Row>
            <Cell>
              <span>Population</span>
              <Tooltip data={tooltips.population} />
            </Cell>
            <Cell>{population}</Cell>
          </Row>

          <Row>
            <Cell>
              <span>Diameter</span>
              <Tooltip data={tooltips.diameter} />
            </Cell>
            <Cell>{diameter}</Cell>
          </Row>

          <Row>
            <Cell>
              <span>Rotation Period</span>
              <Tooltip data={tooltips.rotationPeriod} />
            </Cell>
            <Cell>{rotationPeriod}</Cell>
          </Row>
        </Body>
      </Table>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: ${palette.blockBackground};
  border-radius: 0.25rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`

const Image = styled.img`
  min-width: 150px;
  height: 150px;
  border-radius: 10px;
`

const Table = styled.table``

const Caption = styled.caption`
  margin-bottom: 10px;
  text-align: left;
  color: ${palette.green};
  font-size: 20px;
`

const Body = styled.tbody``

const Row = styled.tr``

const Cell = styled.td`
  padding-bottom: 10px;
  text-align: start;

  &:first-of-type {
    padding-right: 20px;
  }

  & > span:last-of-type {
    margin-left: 8px;
  }
`
