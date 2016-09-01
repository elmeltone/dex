
//BOARDS --------------------

//add Board
export function addBoard(board) {
  console.log("Adding board");
  return {
    type: 'ADD_BOARD',
    payload: board
  }
}

//delete Board
export function deleteBoard(boardId, i) {
  console.log("Deleting board " + i);
  return {
    type: 'DELETE_BOARD',
    i,
    boardId
  }
}


//DECKS ---------------------

//add Deck
export function addDeck(boardId, deck) {
  console.log("Adding deck to " + boardId);
  return {
    type: 'ADD_DECK',
    boardId,
    payload: deck
  }
}

//delete Deck
export function deleteDeck(boardId, j) {
  console.log("Deleting deck " + j);
  return {
    type: 'DELETE_DECK',
    j,
    boardId
  }
}


//CARDS ---------------------

//add Card
export function addCard(boardId, j, card) {
  console.log("Adding card to " + j);
  return {
    type: 'ADD_CARD',
    boardId,
    j,
    payload: card
  }
}

//delete Card
export function deleteCard(boardId, j, k) {
  console.log("Deleting card " + k);
  return {
    type: 'DELETE_CARD',
    boardId,
    j,
    k
  }
}
