import { GeoLocation } from '@/domain/types'

export type GeoLocationContextState = {
  isLoading: boolean
  location: GeoLocation
}
