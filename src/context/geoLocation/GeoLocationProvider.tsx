import { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react'
import * as Location from 'expo-location'
import { GeoLocationContextState } from './types'

export const GeoLocationContext = createContext<GeoLocationContextState>({
  isLoading: false,
  location: {},
})

export const GeoLocationProvider = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState({ lat: undefined, lon: undefined })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      setIsLoading(true)
      let location = await Location.getCurrentPositionAsync()
      setLocation({ lat: location.coords.latitude, lon: location.coords.longitude })
      setIsLoading(false)
    })()
  }, [])

  const value = useMemo(
    () => ({
      location,
      isLoading,
    }),
    [location, isLoading]
  )

  return <GeoLocationContext.Provider value={value}>{children}</GeoLocationContext.Provider>
}
