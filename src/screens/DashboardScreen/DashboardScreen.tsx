import { StyleSheet, View } from 'react-native'
import { useGeoLocation } from '@/context/geoLocation'
import { WeatherCard } from '@/components/WeatherCard'
import { GeoLocation } from '@/domain'
import { ScreenRoutes, StackParamList } from '@/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const locations = {
  berlin: {
    lat: 52.524368,
    lon: 13.41053,
  },
  london: {
    lat: 51.5073219,
    lon: -0.1276474,
  },
}

export const DashboardScreen = ({ navigation }: NativeStackScreenProps<StackParamList, ScreenRoutes.Dashboard>) => {
  const { location, requestLocationPermission } = useGeoLocation()

  const navigateToWeatherLocation = (location: GeoLocation) => {
    navigation.navigate(ScreenRoutes.WeatherLocation, { location })
  }

  const handleCurrentLocationPress = (location: GeoLocation) => {
    if (location.lat && location.lon) {
      navigateToWeatherLocation(location)
    } else {
      requestLocationPermission()
    }
  }

  return (
    <View style={styles.wrapper}>
      <WeatherCard location={location} isCurrent onPress={handleCurrentLocationPress} />
      <WeatherCard location={locations.berlin} onPress={navigateToWeatherLocation} />
      <WeatherCard location={locations.london} onPress={navigateToWeatherLocation} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    gap: 10,
  },
})
