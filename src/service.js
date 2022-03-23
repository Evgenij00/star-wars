import axios from 'axios'

const URL = 'https://swapi.dev/api'
const IMAGE_URL = 'https://starwars-visualguide.com/assets/img'

export const service = axios.create({
  baseURL: URL,
})

export const imageService = axios.create({
  baseURL: IMAGE_URL,
})

export const getAllPeople = () => service.get(`/people`)
export const getPerson = id => service.get(`/people/${id}`)

export const getAllPlanets = () => service.get(`/planets`)
export const getPlanet = id => service.get(`/planets/${id}`)

export const getAllStarships = () => service.get(`/starships`)
export const getStarship = id => service.get(`/starships/${id}`)

export const getPersonImage = id => `${IMAGE_URL}/characters/${id}.jpg`
export const getPlanetImage = id => `${IMAGE_URL}/planets/${id}.jpg`
export const getStarshipImage = id => `${IMAGE_URL}/starships/${id}.jpg`
