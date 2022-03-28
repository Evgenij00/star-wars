import React, { useEffect } from 'react'
import styled from 'styled-components'
import { palette } from '../../palette'

export const Modal = ({ image, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <OuterContainer onClick={onClose}>
      <InnerContainer
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <Image src={image} />
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const InnerContainer = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${palette.mainBackground};
  box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 1rem;
`

const Image = styled.img`
  border-radius: 1rem;

  @media (max-width: 600px) {
    width: 350px;
  }

  @media (max-width: 450px) {
    width: 250px;
  }
`
