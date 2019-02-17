import * as ArrayHelpers from './array_helpers'

export const initialBoard = () => {
  const board = []
  for (let i = 0; i < 12; i++) {
    board.push(new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0))
  }
  return board
}

export const updateBoard = (oldBoard, oldTile, newTile) => {
  const newBoard = ArrayHelpers.deepDup(oldBoard)
  const { rowIdx: oldRowIdx, colIdx: oldColIdx } = oldTile
  const { rowIdx: newRowIdx, colIdx: newColIdx } = newTile
  newBoard[oldRowIdx][oldColIdx] = 0
  newBoard[newRowIdx][newColIdx] = 1
  return newBoard
}
