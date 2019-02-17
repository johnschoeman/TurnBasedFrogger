import * as ArrayHelpers from './array_helpers'

const boardHeight = 12
const boardWidth = 12

export const initialBoard = () => {
  const board = []
  let boardRow
  for (let i = 0; i < boardHeight - 1; i++) {
    boardRow = []
    for (let j = 0; j < boardWidth; j++) {
      boardRow.push(0)
    }
    board.push(boardRow)
  }
  board.push(new Array(0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 2))
  return board
}

export const moveFrogger = (oldBoard, oldTile, newTile) => {
  const newBoard = ArrayHelpers.deepDup(oldBoard)
  const { rowIdx: oldRowIdx, colIdx: oldColIdx } = oldTile
  const { rowIdx: newRowIdx, colIdx: newColIdx } = newTile
  newBoard[oldRowIdx][oldColIdx] = 0
  newBoard[newRowIdx][newColIdx] = 1
  return newBoard
}

export const placeTraffic = (oldBoard, newTile) => {
  const newBoard = ArrayHelpers.deepDup(oldBoard)
  const { rowIdx, colIdx } = newTile
  newBoard[rowIdx][colIdx] = 2
  return newBoard
}

export const moveTraffic = oldBoard => {
  const newBoard = ArrayHelpers.deepDup(oldBoard)
  for (let i = 0; i < boardHeight; i++) {
    for (let j = boardWidth - 1; j > 0; j--) {
      if (newBoard[i][j - 1] === 2) {
        newBoard[i][j] = 2
      } else if (newBoard[i][j] !== 1) {
        newBoard[i][j] = 0
      }
    }
    if (newBoard[i][0] !== 1) {
      newBoard[i][0] = 0
    }
  }
  return newBoard
}
