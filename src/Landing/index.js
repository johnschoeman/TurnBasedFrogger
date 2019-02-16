import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text>Start Game</Text>
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

export default LandingScreen
