import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AppNavigatorContainer from './AppNavigatorContainer'

import { Colors } from './styles'

const TurnBasedFrogger = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <AppNavigatorContainer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default TurnBasedFrogger
