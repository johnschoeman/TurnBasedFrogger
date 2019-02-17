import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Board from './Board'

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Turn Based Frogger</Text>
      </View>
      <View style={styles.board}>
        <Board />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flex: 5,
    width: '100%',
    height: '100%',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})

export default GameScreen
