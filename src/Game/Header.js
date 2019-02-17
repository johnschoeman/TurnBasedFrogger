import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { GameConsumer } from '../GameContext'

const Header = () => {
  return (
    <GameConsumer>
      {({ currentPlayer }) => {
        return (
          <View style={styles.container}>
            <Text>Turn Based Frogger</Text>
            <Text>{currentPlayer}</Text>
          </View>
        )
      }}
    </GameConsumer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Header
