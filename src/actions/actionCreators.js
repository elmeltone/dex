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

//add Deck
export function addDeck(deck) {
  console.log("Add deck!");
  return {
    type: 'ADD_DECK',
    payload: deck
  }
}

//delete Deck
export function deleteDeck(deckId, i) {
  console.log("Deleting a deck");
  return {
    type: 'DELETE_DECK',
    i,
    deckId
  }
}
