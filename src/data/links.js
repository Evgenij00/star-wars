import React from 'react'
import { TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'

export const links = {
  other: {
    title: 'Additional Information',
    data: [
      {
        id: 1,
        link: 'https://swapi.dev/api/',
        label: 'SWAPI API',
      },
      {
        id: 2,
        link: 'https://www.starwars.com/',
        label: 'Official Star Wars website',
      },
    ],
  },
  films: {
    title: 'Films',
    data: [
      {
        id: 9,
        link: 'https://www.kinopoisk.ru/film/718223/',
        label: 'Star Wars: Episode VIII - The Last Jedi (2017)',
      },
      {
        id: 8,
        link: 'https://www.kinopoisk.ru/film/840152/',
        label: 'Rogue One (2016)',
      },
      {
        id: 7,
        link: 'https://www.kinopoisk.ru/film/714888/',
        label: 'Star Wars: Episode VII - The Force Awakens (2015)',
      },

      {
        id: 4,
        link: 'https://www.kinopoisk.ru/film/5619/',
        label: 'Star Wars: Episode III - Revenge of the Sith (2005)',
      },

      {
        id: 5,
        link: 'https://www.kinopoisk.ru/film/844/',
        label: 'Star Wars: Episode II - Attack of the Clones (2002)',
      },

      {
        id: 6,
        link: 'https://www.kinopoisk.ru/film/6695/',
        label: 'Star Wars: Episode I - The Phantom Menace (1999)',
      },

      {
        id: 1,
        link: 'https://www.kinopoisk.ru/film/447/',
        label: 'Star Wars: Episode VI - Return of the Jedi (1983)',
      },

      {
        id: 2,
        link: 'https://www.kinopoisk.ru/film/338/',
        label: 'Star Wars: Episode V - The Empire Strikes Back (1980)',
      },

      {
        id: 3,
        link: 'https://www.kinopoisk.ru/film/333/',
        label: 'Star Wars (1977)',
      },
    ],
  },
  socialMedia: {
    title: 'Social media',
    data: [
      {
        id: 1,
        link: 'https://twitter.com/starwarsrussia',
        icon: <TiSocialTwitter />,
      },
      {
        id: 2,
        link: 'https://www.youtube.com/user/StarWarsRussia',
        icon: <TiSocialYoutube />,
      },
    ],
  },
}
