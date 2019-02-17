import React from 'react'
import { Text } from 'react-native'

import { GameHelpers } from './utils'

const { Provider, Consumer } = React.createContext()

class GameProvider extends React.Component {
  state = {
    board: GameHelpers.initialBoard(),
    froggerLocation: { rowIdx: 8, colIdx: 6 },
  }

  moveFrogger = newFroggerTile => {
    const { board, froggerLocation: oldFroggerTile } = this.state
    const newBoard = GameHelpers.updateBoard(
      board,
      oldFroggerTile,
      newFroggerTile
    )
    this.setState({ board: newBoard, froggerLocation: newFroggerTile })
  }

  render() {
    return (
      <Provider value={{ ...this.state, moveFrogger: this.moveFrogger }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { GameProvider, Consumer as GameConsumer }
