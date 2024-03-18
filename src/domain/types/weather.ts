import { GeoLocation } from './geoLocation'

export type WeatherConditionData = {
  id: number
  main: string
  description: string
}

export type MainWeatherData = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export type WindData = {
  speed: number
  deg: number
  gust: number
}

export type SystemData = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type LocationCurrentWeatherData = {
  coord: GeoLocation
  weather: WeatherConditionData[]
  main: MainWeatherData
  wind: WindData
  sys: SystemData
  timezone: number
  id: number
  name: string
  cod: number
}
