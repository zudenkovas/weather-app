import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from './navigation'
import { DashboardScreen } from './screens/DashboardScreen'
import { LocationDetailScreen } from './screens/LocationDetailScreen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="WeatherLocation" component={LocationDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 100,
  },
})
