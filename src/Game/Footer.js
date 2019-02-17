import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { GameConsumer } from '../GameContext'

const Footer = ({ navigation }) => {
  return (
    <GameConsumer>
      {({ resetGame }) => {
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
              <Text>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => resetGame()}>
              <Text>Reset Game</Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export default Footer
