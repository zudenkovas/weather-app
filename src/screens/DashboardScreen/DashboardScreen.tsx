import { StyleSheet, View } from 'react-native'
import { useGeoLocation } from '@/context/geoLocation/useGeoLocation'
import { WeatherCard } from '@/components/WeatherCard'
import { GeoLocation } from '@/domain/types'
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
  const { location } = useGeoLocation()

  const handlePress = (location: GeoLocation) => {
    navigation.navigate(ScreenRoutes.WeatherLocation, { location })
  }

  return (
    <View style={styles.wrapper}>
      <WeatherCard location={location} isCurrent onPress={handlePress} />
      <WeatherCard location={locations.berlin} onPress={handlePress} />
      <WeatherCard location={locations.london} onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    gap: 10,
  },
})
