import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { palette } from '../../data/palette'

export const Header = () => {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [showMenu])

  const defineActiveLink = (currentPath, targetPath, label) => {
    return currentPath.includes(targetPath) ? (
      <LinkActiveItem onClick={() => setShowMenu(false)}>
        <LinkActiveNav to={targetPath}>{label}</LinkActiveNav>
      </LinkActiveItem>
    ) : (
      <LinkItem onClick={() => setShowMenu(false)}>
        <LinkNav to={targetPath}>{label}</LinkNav>
      </LinkItem>
    )
  }

  return (
    <OuterContainer>
      <BurgerBtn showMenu={showMenu} onClick={() => setShowMenu(state => !state)}>
        <div />
        <div />
        <div />
      </BurgerBtn>

      <InnerContainer showMenu={showMenu}>
        <h3 onClick={() => setShowMenu(false)}>
          {location.pathname === '/' ? (
            <MainActiveLink to="/">Star Wars</MainActiveLink>
          ) : (
            <MainLink to="/">Star Wars</MainLink>
          )}
        </h3>

        <List>
          {defineActiveLink(location.pathname, '/people', 'People')}
          {defineActiveLink(location.pathname, '/planets', 'Planets')}
          {defineActiveLink(location.pathname, '/starships', 'Starships')}
        </List>
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.header`
  position: relative;

  @media (max-width: 768px) {
    padding-top: 65px;
  }
`

const InnerContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
  padding: 16px 0;

  @media (max-width: 768px) {
    display: ${props => (props.showMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    padding: 65px 20px 20px;
    background-color: ${palette.mainBackground};
  }
`

const MainLink = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  line-height: 1.2;
  font-size: 2rem;
  transition: color 2ms;
  color: ${palette.green};

  &:hover {
    color: ${palette.orange};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 16px;
  }
`

const MainActiveLink = styled(MainLink)`
  color: ${palette.orange};
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
`

const LinkActiveItem = styled(LinkItem)`
  background: ${palette.blockBackground};
`

const LinkNav = styled(Link)`
  text-decoration: none;
  color: ${palette.green};
  transition: fill 1ms;

  &:hover {
    color: ${palette.orange};
  }
`

const LinkActiveNav = styled(LinkNav)`
  color: ${palette.orange};
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
