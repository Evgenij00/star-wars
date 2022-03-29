import React from 'react'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player'

import { palette } from '../../data'
import preview from '../../assets/audios/preview.mp3'
const gif = require('../../assets/images/main.gif')

export const Preview = () => {
  return (
    <Main>
      <Description>
        <Title>Вступление</Title>

        <SubTitle>Приветствую вас, гости сайта!</SubTitle>

        <Block>Данное веб-приложение предназначено в целях ознакомительного характера. </Block>

        <Block>
          Здесь вы сможете впервые познакомиться или освежить информацию по вселенной{' '}
          <Link href="https://www.starwars.com/" target="_blank">
            STAR WARS.
          </Link>
        </Block>

        <Block>
          В зависимости от раздела, вам будет доступна информация о героях саги, планетах и
          звездолетах. Вся информация была получена, благодаря сервису{' '}
          <Link href="https://www.starwars.com/" target="_blank">
            SWAPI API.
          </Link>
        </Block>

        <Block>
          Данное веб-приложение было, в первую очередь, ориентировано на удобство использования. Оно
          было адаптировано под все дисплеи. Таким образом, просматривать информацию можно как на
          настольных ПК и ноутбуках, так и на мобильных устройствах и планшетах. При этом, качество
          отображаемой информации останется в лучшем виде!
        </Block>

        <Block>Приятного пользования! &#128515;</Block>

        <AudioMessage>Аудиоверсия</AudioMessage>

        <Player src={preview} controls />
      </Description>

      <Images src={gif} alt="preview" />
    </Main>
  )
}

const Main = styled.div`
  margin-bottom: 16px;
`

const Images = styled.img`
  width: 100%;
  border-radius: 1rem;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`

const Title = styled.h1`
  align-self: center;
  color: ${palette.green};
  font-size: 32px;
  margin-bottom: 10px;
`

const SubTitle = styled.h2`
  font-size: 18px;
  color: ${palette.green};
`

const Link = styled.a`
  text-decoration: none;
  color: ${palette.green};

  &:hover {
    color: ${palette.orange};
  }
`

const Block = styled.p`
  line-height: 138%;
  font-size: 1rem;
  color: #a7a7a7;
`

const AudioMessage = styled.div`
  color: ${palette.orange};
  letter-spacing: 0.05rem;
`

const Player = styled(ReactAudioPlayer)`
  height: 35px;
  width: 50%;

  @media (max-width: 500px) {
    width: 100%;
  }
`
