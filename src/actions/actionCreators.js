//add Board
export function addBoard(boardId, title) {
  return {
    type: 'ADD_BOARD',
    boardId,
    title
  }
}

//delete Board
export function deleteBoard(boardId, i) {
  return {
    type: 'DELETE_BOARD',
    boardId,
    i
  }
}
