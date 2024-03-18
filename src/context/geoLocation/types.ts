import { GeoLocation } from '@/domain'

export type GeoLocationContextState = {
  isLoading: boolean
  location: GeoLocation
  requestLocationPermission: () => Promise<void> | void
}
