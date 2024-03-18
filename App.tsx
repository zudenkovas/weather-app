import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ScreenRoutes, Stack } from './src/navigation'
import { DashboardScreen } from './src/screens/DashboardScreen'
import { LocationDetailScreen } from './src/screens/LocationDetailScreen'
import { GeoLocationProvider } from './src/context/geoLocation'

const queryClient = new QueryClient()

export default function App() {
  return (
    <GeoLocationProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={ScreenRoutes.Dashboard} component={DashboardScreen} />
            <Stack.Screen
              name={ScreenRoutes.WeatherLocation}
              component={LocationDetailScreen}
              options={{ title: '' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </GeoLocationProvider>
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
