import { ReactNode } from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native'

type DataDetailProps = {
  title: ReactNode
  value: ReactNode
  style?: ViewStyle
}
export const DataDetail = ({ title, value, style }: DataDetailProps) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
  },
})
