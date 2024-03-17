import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GeoLocation, LocationCurrentWeatherData } from '@/domain/types'
import { useLocationCurrentWeather } from '@/api/weather'
import { formatTemperature } from '@/utils'
import { LoadingSkeleton } from '../LoadingSkeleton/LoadingSkeleton'

type WeatherCardProps = {
  location: GeoLocation
  onPress?: (location: GeoLocation) => void
  isCurrent?: boolean
}

const Translations = {
  currentLocation: 'Current location',
  notAvailable: 'Not available',
  nA: 'N/A',
}

export const WeatherCard = ({ location, isCurrent, onPress }: WeatherCardProps) => {
  const { data, isLoading } = useLocationCurrentWeather(location)

  const temperature = formatTemperature(data?.main.temp)
  const name = data?.name || Translations.nA

  const handlePress = () => {
    onPress?.(location)
  }

  return (
    <Pressable style={styles.pressable} onPress={handlePress}>
      <View>
        {isCurrent && <Text style={styles.locationLabel}>{Translations.currentLocation}</Text>}
        <LoadingSkeleton isLoading={isLoading} height={20}>
          {location.lat && location.lon ? (
            <View style={styles.locationTemperatureWrapper}>
              <Text style={styles.locationName}>{name}</Text>

              <Text style={styles.temperature}>{temperature}</Text>
            </View>
          ) : (
            <Text style={styles.locationLabel}>{Translations.notAvailable}</Text>
          )}
        </LoadingSkeleton>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    height: 100,
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  locationName: {
    fontSize: 24,
  },
  locationLabel: {
    fontSize: 12,
  },
  temperature: {
    fontSize: 24,
  },
  locationTemperatureWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
