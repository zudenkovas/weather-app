import { RouteProp } from '@react-navigation/native'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'

export const Stack = createNativeStackNavigator<StackParamList>()

export const ScreenRoutes = {
  Dashboard: 'Dashboard',
  WeatherLocation: 'WeatherLocation',
} as const

type StackParamList = {
  [ScreenRoutes.Dashboard]: undefined
  [ScreenRoutes.WeatherLocation]: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
