import { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react'
import * as Location from 'expo-location'
import { GeoLocationContextState } from './types'
import { GeoLocation } from '@/domain'

export const GeoLocationContext = createContext<GeoLocationContextState>({
  isLoading: false,
  location: {},
  requestLocationPermission: () => {},
})

export const GeoLocationProvider = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState<GeoLocation>({ lat: undefined, lon: undefined })
  const [isLoading, setIsLoading] = useState(false)

  const requestLocationPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      setIsLoading(true)
      let location = await Location.getCurrentPositionAsync()
      setLocation({ lat: location.coords.latitude, lon: location.coords.longitude })
      setIsLoading(false)
    } catch (error) {
      // Fail silently
      console.log(error)
    }
  }

  useEffect(() => {
    if (!location.lat || !location.lon) {
      requestLocationPermission()
    }
  }, [])

  const value = useMemo(
    () => ({
      location,
      isLoading,
      requestLocationPermission,
    }),
    [location, isLoading]
  )

  return <GeoLocationContext.Provider value={value}>{children}</GeoLocationContext.Provider>
}
