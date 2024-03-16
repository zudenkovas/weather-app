import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native'
import { ScreenRoutes } from '../../navigation'

export const DashboardScreen = () => {
  const navigation = useNavigation()
  console.log('HomeScreens')
  return (
    <View>
      <Button
        title="Press me"
        onPress={() => {
          console.log('Button pressed')
          navigation.navigate(ScreenRoutes.WeatherLocation)
        }}
      />
      <Text>Open up App.js to start working on your app! Helssslo</Text>
    </View>
  )
}
