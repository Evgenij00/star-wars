import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { transformPerson } from '../../utils'
import { getAllPeople, getPerson, getPersonImage } from '../../service'
import { Spinner } from '../../components'

export const PeoplePage = () => {
  const { id } = useParams()
  const history = useHistory()

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

      {person && personImage ? (
        <InfoContainer>
          <Image src={personImage} alt="item" />

          <Table>
            <Caption>{person.name}</Caption>

            <Body>
              <Row>
                <Cell>Gender</Cell>
                <Cell>{person.gender}</Cell>
              </Row>

              <Row>
                <Cell>Eye Color</Cell>
                <Cell>{person.eyeColor}</Cell>
              </Row>
            </Body>
          </Table>
        </InfoContainer>
      ) : (
        <Spinner />
      )}
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
  background-color: #231f33;
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
  border: 1px solid #100e19;

  &:first-of-type {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-of-type {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #231f33;
  width: 50%;
  border-radius: 0.25rem;

  @media (max-width: 930px) {
    width: 100%;
  }
`

const Image = styled.img`
  width: 30%;
  min-width: 30%;
  border-radius: 10px;
`

const Table = styled.table``

const Caption = styled.caption`
  margin-bottom: 20px;
  text-align: left;
`

const Body = styled.tbody``

const Row = styled.tr``

const Cell = styled.td`
  padding-bottom: 10px;

  &:first-of-type {
    padding-right: 20px;
  }
`
