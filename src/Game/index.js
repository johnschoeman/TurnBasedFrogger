import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Header from './Header'
import Board from './Board'
import Footer from './Footer'

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.board}>
        <Board />
      </View>
      <View style={styles.footer}>
        <Footer navigation={navigation} />
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
