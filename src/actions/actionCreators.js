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
export function addDeck(boardId, deck) {
  console.log("Add deck to " + boardId);
  return {
    type: 'ADD_DECK',
    boardId,
    payload: deck
  }
}

//delete Deck
export function deleteDeck(boardId, i) {
  console.log("Deleting a deck");
  return {
    type: 'DELETE_DECK',
    i,
    boardId
  }
}

//add Card
export function addCard(boardId, i, card) {
  console.log("Add card to " + i);
  return {
    type: 'ADD_CARD',
    boardId,
    i,
    payload: card
  }
}

//delete Card
export function deleteCard(boardId, i) {
  console.log("Deleting a card");
  return {
    type: 'DELETE_CARD',
    i,
    boardId
  }
}
