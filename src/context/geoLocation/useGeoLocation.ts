import { useContext } from 'react'
import { GeoLocationContext } from './GeoLocationProvider'

export const useGeoLocation = () => useContext(GeoLocationContext)
