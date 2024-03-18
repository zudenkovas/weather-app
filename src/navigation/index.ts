import { GeoLocation } from '@/domain'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export const Stack = createNativeStackNavigator<StackParamList>()

export enum ScreenRoutes {
  Dashboard = 'Dashboard',
  WeatherLocation = 'WeatherLocation',
}

export type StackParamList = {
  [ScreenRoutes.Dashboard]: undefined
  [ScreenRoutes.WeatherLocation]: { location: GeoLocation }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
