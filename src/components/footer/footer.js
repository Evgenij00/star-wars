import React from 'react'
import styled from 'styled-components'

import { links } from '../../links'
import { palette } from '../../palette'

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

const OuterContainer = styled.div`
  padding: 40px 0 16px;
  border-top: 1px solid ${palette.orange};
`

const InnerContainer = styled.div`
  display: flex;
  gap: 50px;
  width: 930px;
  margin: 0 auto;
  padding: 20px 40px;
`

const Block = styled.div``

const Title = styled.div`
  color: ${palette.green};
  margin-bottom: 16px;
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
