//add Board
export function addBoard(board) {
  console.log("Add board!");
  return {
    type: 'ADD_BOARD',
    payload: board
  }
}

//delete Board
export function deleteBoard(boardId, i) {
  console.log("Deleting a board");
  return {
    type: 'DELETE_BOARD',
    i,
    boardId
  }
}
