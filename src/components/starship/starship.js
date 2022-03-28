import React, { useState } from 'react'
import styled from 'styled-components'

import { Tooltip, Modal } from '../../components'
import { palette } from '../../palette'
import { tooltips } from '../../tolltips'

export const Starship = ({ starship, image }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <OuterContainer>
      <Image src={image} alt="starship" onClick={() => setShowModal(true)} />

      <Content>
        <Table>
          <Caption>{starship.name}</Caption>

          <Body>
            <Row>
              <Cell>
                <span>Model</span>
                <Tooltip data={tooltips.model} />
              </Cell>
              <Cell>{starship.model}</Cell>
            </Row>

            <Row>
              <Cell>
                <span>Length</span>
                <Tooltip data={tooltips.length} />
              </Cell>
              <Cell>{starship.length}</Cell>
            </Row>

            <Row>
              <Cell>
                <span>Cost</span>
                <Tooltip data={tooltips.cost} />
              </Cell>
              <Cell>{starship.costInCredits}</Cell>
            </Row>
          </Body>
        </Table>
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
    white-space: nowrap;
  }

  & > span:last-of-type {
    margin-left: 8px;
  }
`
