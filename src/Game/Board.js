import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import BoardRow from './BoardRow'
import { GameConsumer } from '../GameContext'

import { Colors } from '../styles'

const Board = () => {
  return (
    <GameConsumer>
      {({ board }) => {
        return (
          <View style={styles.container}>
            {board.map((row, rowIdx) => {
              return (
                <View style={styles.row} key={`row-${rowIdx}`}>
                  <BoardRow row={row} rowIdx={rowIdx} />
                </View>
              )
            })}
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
    borderWidth: 1,
    borderColor: Colors.tileBorder,
  },
  row: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Board
