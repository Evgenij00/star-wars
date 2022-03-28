import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { transformPerson } from '../../utils'
import { getPerson, getPersonImage } from '../../service'
import { Spinner, Tooltip } from '../../components'
import { palette } from '../../palette'
import { tooltips } from '../../tolltips'
import { useAudio } from '../../hooks'

import sound from '../../assets/audios/d.mp3'

export const Person = ({ person, image }) => {
  const [playing, toggle] = useAudio(sound)

  return (
    <InfoContainer>
      <div>
        <Image src={image} alt="item" />

        <Table>
          <Caption>{person.name}</Caption>

          <Body>
            <Row>
              <Cell>
                <span>Gender</span>
                <Tooltip data={tooltips.gender} />
              </Cell>
              <Cell>{person.gender}</Cell>
            </Row>

            <Row>
              <Cell>
                <span>Eye Color</span>
                <Tooltip data={tooltips.eyeColor} />
              </Cell>
              <Cell>{person.eyeColor}</Cell>
            </Row>
          </Body>
        </Table>
      </div>

      <div>
        <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
      </div>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: ${palette.blockBackground};
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
  color: ${palette.green};
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
