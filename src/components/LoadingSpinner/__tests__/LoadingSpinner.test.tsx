import React from 'react'
import { Text } from 'react-native'
import { render, screen } from '@testing-library/react-native'
import { FullScreenLoadingSpinner } from '../LoadingSpinner'

describe('FullScreenLoadingSpinner', () => {
  it('should render the loading spinner when isLoading is true', () => {
    const contentTestId = 'content'
    const loadingSpinnerTestId = 'loading-spinner'

    render(
      <FullScreenLoadingSpinner isLoading={true} testID={loadingSpinnerTestId}>
        <Text testID={contentTestId}>Content</Text>
      </FullScreenLoadingSpinner>
    )

    const loadingSpinner = screen.getByTestId(loadingSpinnerTestId)
    expect(loadingSpinner).toBeOnTheScreen()
  })

  it('should render the children when isLoading is false', () => {
    const contentTestId = 'content'
    const loadingSpinnerTestId = 'loading-spinner'

    render(
      <FullScreenLoadingSpinner isLoading={false} testID={loadingSpinnerTestId}>
        <Text testID={contentTestId}>Content</Text>
      </FullScreenLoadingSpinner>
    )

    const content = screen.getByTestId(contentTestId)
    expect(content).toBeOnTheScreen()
  })
})
