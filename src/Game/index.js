import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default GameScreen
