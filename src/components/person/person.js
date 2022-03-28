import React, { useState } from 'react'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player'

import { Tooltip } from '../../components'
import { palette } from '../../data/palette'
import { tooltips } from '../../data/tolltips'
import { sounds } from '../../data/sounds'
import { Modal } from '../modal/modal'

export const Person = ({ person, image, id }) => {
  const [showModal, setShowModal] = useState(false)
  const sound = sounds.filter(item => item.id === +id)[0]

  return (
    <OuterContainer>
      <Image src={image} alt="person" onClick={() => setShowModal(true)} />

      <Content>
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

        {sound && sound.id && <Player src={sound.sound} controls />}
      </Content>

      {image && showModal && <Modal image={image} onClose={() => setShowModal(false)} />}
    </OuterContainer>
  )
}

const OuterContainer = styled.section`
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

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 16px;
`

const Table = styled.table`
  align-self: flex-start;
`

const Caption = styled.caption`
  margin-bottom: 20px;
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

const Player = styled(ReactAudioPlayer)`
  height: 35px;
  width: 100%;
`
