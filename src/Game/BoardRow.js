import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import { GameConsumer } from '../GameContext'

import { Colors } from '../styles'

const BoardRow = ({ row, rowIdx, moveFogger }) => {
  return (
    <GameConsumer>
      {({ moveFrogger }) => (
        <View style={styles.container}>
          {row.map((col, colIdx) => {
            const tile = { rowIdx, colIdx }
            const tileText = col === 1 ? 'F' : '-'
            return (
              <TouchableOpacity
                onPress={() => moveFrogger(tile)}
                style={styles.tile}
                key={`col-${colIdx}`}
              >
                <Text>{tileText}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      )}
    </GameConsumer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.tileBorder,
  },
})

export default BoardRow
