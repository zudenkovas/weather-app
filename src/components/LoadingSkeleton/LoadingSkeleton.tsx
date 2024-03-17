import React, { useEffect, PropsWithChildren, useRef } from 'react'
import { StyleSheet, Animated, Easing, DimensionValue } from 'react-native'

type LoadingSkeletonProps = PropsWithChildren<{
  count?: number
  height?: DimensionValue
  isLoading?: boolean
}>

export const LoadingSkeleton = ({ count = 1, height = 16, isLoading, children }: LoadingSkeletonProps) => {
  const style = styles(height)
  const minValue = 0.25
  const maxValue = 0.75

  const fadeAnim = useRef(new Animated.Value(minValue)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: maxValue,
          duration: 2000,
          easing: Easing.bezier(0, 2, 0, -1),
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: minValue,
          duration: 2000,
          easing: Easing.bezier(0, 2, 0, -1),
          useNativeDriver: true,
        }),
      ])
    ).start()
  }, [fadeAnim])

  return isLoading ? (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Animated.View style={{ ...style.placeholder, opacity: fadeAnim }} key={index} />
      ))}
    </>
  ) : (
    children
  )
}

const styles = (height: LoadingSkeletonProps['height']) =>
  StyleSheet.create({
    placeholder: {
      backgroundColor: '#ccc',
      height,
      borderRadius: 4,
      marginTop: 4,
      marginBottom: 4,
    },
  })
