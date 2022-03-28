import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { palette } from '../../palette'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [showMenu])

  return (
    <OuterContainer>
      <BurgerBtn showMenu={showMenu} onClick={() => setShowMenu(state => !state)}>
        <div />
        <div />
        <div />
      </BurgerBtn>

      <InnerContainer showMenu={showMenu}>
        <h3>
          <MainLink to="/">Star Wars</MainLink>
        </h3>

        <List>
          <LinkItem>
            <LinkNav to="/people">People</LinkNav>
          </LinkItem>

          <LinkItem>
            <LinkNav to="/planets">Planets</LinkNav>
          </LinkItem>

          <LinkItem>
            <LinkNav to="/starships">Starships</LinkNav>
          </LinkItem>
        </List>
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.aside`
  position: relative;

  @media (max-width: 768px) {
    padding-top: 65px;
  }
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
  padding: 16px 0;

  @media (max-width: 768px) {
    display: ${props => (props.showMenu ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: ${palette.mainBackground};

    padding-top: 65px;
    flex-direction: column;
    align-items: flex-start;
  }
`

const MainLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const LinkItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 3px;

  &:hover {
    background: ${palette.yellow};
  }
`

const LinkNav = styled(Link)`
  text-decoration: none;
  color: ${palette.green};
`

const BurgerBtn = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
  }

  position: absolute;
  top: 16px;
  left: 0;
  z-index: 200;
  background: none;
  border: 2px solid ${palette.border};
  border-radius: 4px;
  outline: none;

  & > div {
    width: 20px;
    height: 2px;
    background-color: ${palette.border};
    margin: 6px 0;
    transition: 0.4s;
  }

  & > div:nth-child(1) {
    transform: ${props => (props.showMenu ? 'rotate(-45deg) translate(-6px, 5px)' : 'none')};
  }

  & > div:nth-child(2) {
    opacity: ${props => (props.showMenu ? '0' : '1')};
  }

  & > div:nth-child(3) {
    transform: ${props => (props.showMenu ? 'rotate(45deg) translate(-6px, -6px)' : 'none')};
  }
`
