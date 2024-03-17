import { PropsWithChildren } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

type FullScreenLoadingSpinnerProps = PropsWithChildren<{
  isLoading?: boolean
  testID?: string
}>

export const FullScreenLoadingSpinner = ({ isLoading, children, testID }: FullScreenLoadingSpinnerProps) => {
  return isLoading ? (
    <View style={styles.container} testID={testID}>
      <ActivityIndicator />
    </View>
  ) : (
    children
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
