import { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useLocationCurrentWeather } from '@/api/weather'
import { ScreenRoutes, StackParamList } from '@/navigation'
import { formatHumidity, formatTemperature, formatWindSpeed, unixTimestampToDateTime } from '@/utils'
import { DataDetail } from '@/components/DataDetail/'
import { FullScreenLoadingSpinner } from '@/components/LoadingSpinner'

const Translations = {
  feelsLike: 'Feels like ',
  sunrise: 'Sunrise',
  sunset: 'Sunset',
  windSpeed: 'Wind speed',
  humidity: 'Humidity',
}

export const LocationDetailScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, ScreenRoutes.WeatherLocation>) => {
  const { data, isLoading } = useLocationCurrentWeather(route.params.location)

  useEffect(() => {
    navigation.setOptions({ title: data?.name || 'Weather' })
  }, [data])

  return (
    <FullScreenLoadingSpinner isLoading={isLoading}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.weatherDescription}>{data?.weather[0].description}</Text>
          <Text style={styles.temperature}>{formatTemperature(data?.main.temp)}</Text>
          <Text style={styles.feelsLikeTemperature}>
            {Translations.feelsLike} {formatTemperature(data?.main.feels_like)}
          </Text>
        </View>

        <View style={styles.additionalInfoContainer}>
          <View style={styles.additionalInfoRow}>
            <DataDetail
              title={Translations.sunrise}
              value={unixTimestampToDateTime(data?.sys.sunrise ?? 0 + (data?.timezone ?? 0))}
              style={styles.additionalInfoItem}
            />
            <DataDetail
              title={Translations.sunset}
              value={unixTimestampToDateTime(data?.sys.sunset ?? 0 + (data?.timezone ?? 0))}
              style={styles.additionalInfoItem}
            />
          </View>
          <View style={styles.additionalInfoRow}>
            <DataDetail
              title={Translations.windSpeed}
              value={formatWindSpeed(data?.wind.speed)}
              style={styles.additionalInfoItem}
            />
            <DataDetail
              title={Translations.humidity}
              value={formatHumidity(data?.main.humidity)}
              style={styles.additionalInfoItem}
            />
          </View>
        </View>
      </View>
    </FullScreenLoadingSpinner>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  topContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  weatherDescription: {
    fontSize: 20,
    marginBottom: 20,
  },
  temperature: {
    fontSize: 60,
    marginBottom: 20,
  },
  feelsLikeTemperature: {
    fontSize: 14,
  },
  additionalInfoContainer: {
    justifyContent: 'space-between',
  },
  additionalInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  additionalInfoItem: {
    width: '50%',
  },
})
