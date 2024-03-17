import { useQuery } from '@tanstack/react-query'
import { GetLocationCurrentWeatherArgs, GetLocationCurrentWeatherResponse } from './types'
import { getLocationCurrentWeather } from './requests'

export const useLocationCurrentWeather = ({ lat, lon }: GetLocationCurrentWeatherArgs) =>
  useQuery<GetLocationCurrentWeatherResponse>({
    queryKey: ['locationCurrentWeather', lat, lon],
    queryFn: async () => await getLocationCurrentWeather({ lat, lon }),
    enabled: typeof lat === 'number' && typeof lon === 'number',
  })
