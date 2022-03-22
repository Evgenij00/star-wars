import axios from 'axios'

const URL = 'https://swapi.dev/api'
const IMAGE_URL = 'https://starwars-visualguide.com/assets/img'

export const swapiService = axios.create({
  baseURL: URL,
})

export const imageService = axios.create({
  baseURL: IMAGE_URL,
})

export const getAllPeople = () => swapiService.get(`/people`)
export const getPerson = id => swapiService.get(`/people/${id}`)

export const getAllPlanets = () => swapiService.get(`/planets`)
export const getPlanet = id => swapiService.get(`/planets/${id}`)

export const getAllStarships = () => swapiService.get(`/starships`)
export const getStarship = id => swapiService.get(`/starships/${id}`)

export const getPersonImage = id => imageService.get(`/characters/${id}.jpg`)
export const getPlanetImage = id => imageService.get(`/planets/${id}.jpg`)
export const getStarshipImage = id => imageService.get(`/starships/${id}.jpg`)
