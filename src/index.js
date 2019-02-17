import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AppNavigatorContainer from './AppNavigatorContainer'
import { GameProvider } from './GameContext'

import { Colors } from './styles'

const TurnBasedFrogger = () => {
  return (
    <View style={styles.container}>
      <GameProvider>
        <AppNavigatorContainer />
      </GameProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default TurnBasedFrogger
