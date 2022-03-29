import React from 'react'
import styled from 'styled-components'

import { links } from '../../data/links'
import { palette } from '../../data/palette'

export const Footer = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <Block>
          <Title>{links.other.title}</Title>

          <List>
            {links.other.data.map(item => (
              <ListItem key={item.id}>
                <a href={item.link} target="_blank">
                  {item.label}
                </a>
              </ListItem>
            ))}
          </List>
        </Block>

        <Block>
          <Title>{links.films.title}</Title>

          <List>
            {links.films.data.map(item => (
              <ListItem key={item.id}>
                <a href={item.link} target="_blank">
                  {item.label}
                </a>
              </ListItem>
            ))}
          </List>
        </Block>

        <Block>
          <Title>{links.socialMedia.title}</Title>

          <ListIcons>
            {links.socialMedia.data.map(item => (
              <ListItem key={item.id}>
                <a href={item.link} target="_blank">
                  {item.icon}
                </a>
              </ListItem>
            ))}
          </ListIcons>
        </Block>
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.footer`
  padding: 40px 0 16px;
  margin-top: 24px;
  border-top: 1px solid ${palette.orange};
`

const InnerContainer = styled.div`
  display: flex;
  gap: 50px;
  width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;

  @media (max-width: 930px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 24px;
  }
`

const Block = styled.div``

const Title = styled.h1`
  color: ${palette.green};
  margin-bottom: 16px;
  font-size: 18px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ListIcons = styled(List)`
  flex-direction: row;
`

const ListItem = styled.li`
  cursor: pointer;

  & > a {
    text-decoration: none;
    color: white;

    &:hover {
      color: ${palette.orange};
    }
  }
`
