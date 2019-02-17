import React from 'react'
import { Text } from 'react-native'

import { GameHelpers } from './utils'

const { Provider, Consumer } = React.createContext()

const frogger = 'frogger'
const traffic = 'traffic'
const initialFroggerLocation = { rowIdx: 11, colIdx: 6 }

class GameProvider extends React.Component {
  state = {
    board: GameHelpers.initialBoard(),
    froggerLocation: initialFroggerLocation,
    currentPlayer: frogger,
  }

  moveTraffic = () => {
    const { board } = this.state
    const newBoard = GameHelpers.moveTraffic(board)
    this.setState({ board: newBoard })
  }

  swapPlayers = () => {
    const { currentPlayer } = this.state
    if (currentPlayer === frogger) {
      this.setState({ currentPlayer: traffic })
    } else {
      this.setState({ currentPlayer: frogger })
    }
  }

  selectTile = newTile => {
    const { currentPlayer } = this.state
    if (currentPlayer === frogger) {
      this.moveFrogger(newTile)
    } else {
      this.placeTraffic(newTile)
    }
  }

  moveFrogger = newTile => {
    const { board, froggerLocation: oldFroggerTile } = this.state
    if (this.validMove(newTile)) {
      const newBoard = GameHelpers.moveFrogger(board, oldFroggerTile, newTile)
      this.setState({ board: newBoard, froggerLocation: newTile }, () => {
        this.moveTraffic()
        this.swapPlayers()
      })
    }
  }

  placeTraffic = tile => {
    const { board } = this.state
    if (this.validPlacement(tile)) {
      const newBoard = GameHelpers.placeTraffic(board, tile)
      this.setState({ board: newBoard })
      this.swapPlayers()
    }
  }

  validMove = newTile => {
    const { rowIdx: newRowIdx, colIdx: newColIdx } = newTile
    const {
      froggerLocation: { rowIdx, colIdx },
    } = this.state
    if (Math.abs(newRowIdx - rowIdx) + Math.abs(newColIdx - colIdx) < 2) {
      return true
    } else {
      return false
    }
  }

  validPlacement = tile => {
    const {
      froggerLocation: { rowIdx: froggerRowIdx, colIdx: froggerColIdx },
    } = this.state
    const { rowIdx, colIdx } = tile
    if (
      colIdx === 0 &&
      !(froggerRowIdx === rowIdx && froggerColIdx === colIdx)
    ) {
      return true
    } else {
      return false
    }
  }

  resetGame = () => {
    this.setState({
      board: GameHelpers.initialBoard(),
      froggerLocation: initialFroggerLocation,
      currentPlayer: frogger,
    })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          selectTile: this.selectTile,
          resetGame: this.resetGame,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { GameProvider, Consumer as GameConsumer }
