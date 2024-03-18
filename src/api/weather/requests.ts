import { LocationCurrentWeatherData } from '@/domain'
import { getReq } from '../commons'
import { GetLocationCurrentWeatherArgs } from './types'

const WEATHER_DATA_URL = '/data/2.5/weather'

export const getLocationCurrentWeather = async ({ lat, lon }: GetLocationCurrentWeatherArgs) =>
  await getReq<LocationCurrentWeatherData>(`${WEATHER_DATA_URL}?lat=${lat}&lon=${lon}&units=metric`).then(
    (res) => res.data
  )
