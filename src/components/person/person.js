import React, { useState } from 'react'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player'

import { Tooltip } from '../../components'
import { palette } from '../../palette'
import { tooltips } from '../../tolltips'
import { sounds } from '../../sounds'
import { Modal } from '../modal/modal'

export const Person = ({ person, image, id }) => {
  const [showModal, setShowModal] = useState(false)
  const sound = sounds.filter(item => item.id === +id)[0]

  return (
    <OuterContainer>
      <Header>
        <Image src={image} alt="item" onClick={() => setShowModal(true)} />

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
      </Header>

      {sound && sound.id && <Player src={sound.sound} controls />}

      {image && showModal && <Modal image={image} onClose={() => setShowModal(false)} />}
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  padding: 16px;
  background-color: ${palette.blockBackground};
  width: 50%;
  border-radius: 0.25rem;

  @media (max-width: 930px) {
    width: 100%;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`

const Image = styled.img`
  cursor: pointer;
  width: 30%;
  min-width: 30%;
  border-radius: 10px;
  transition: width 0.5s;

  &:hover {
    width: 40%;
  }
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

const Player = styled(ReactAudioPlayer)`
  height: 35px;
`