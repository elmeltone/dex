import guid from '../data/guid';

function addCard(boards, boardId, j, text){
  return boards.map(function(deck, index) {
    if ((board.id === boardId) && (deck.j === j)) {
      deck.cards = [...deck.cards, {
          id: guid(),
          text: text
        }]
    };
    return deck;
  });
}

function addDeck(boards, boardId, title){
  return boards.map(function(board, index) {
    if (board.id === boardId) {
      board.decks = [...board.decks, {
        id: guid(),
        title: title,
        cards: []
      }]
    };
    return board;
  });
}

function deleteCard(boards, boardId, j, k){
  return boards.map(function(board, index) {
    if (board.id === boardId) {
      return board.decks.map(function(deck, index2) {
        if (deck.j === j) {
          deck.cards = [
            ...deck.cards.slice(0,k),
            ...deck.cards.slice(k+1)
          ]
        }
      });
    };
    return boards;
  });
}

function deleteDeck(boards, boardId, j){
  return boards.map(function(board, index) {
    if (board.id === boardId) {
      board.decks = [
        ...board.decks.slice(0,j),
        ...board.decks.slice(j+1)
      ]
    };
    return board;
  });
}

function boards(state = [], action) {
  switch(action.type){
    case 'ADD_BOARD':
    console.log(action);
      return [...state,{
        id: guid(),
        title: action.payload.title,
        decks: []
      }];
    case 'DELETE_BOARD':
    console.log(action);
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1)
      ];
    case 'ADD_DECK':
      console.log(state, action);
      return addDeck(state, action.boardId, action.payload.title);
    case 'DELETE_DECK':
      console.log(state, action);
      return deleteDeck(state, action.boardId, action.j);
    case 'ADD_CARD':
      console.log(state, action);
      return addDeck(state, action.boardId, action.j, action.payload.text);
    case 'DELETE_CARD':
      console.log(state, action);
      return deleteCard(state, action.boardId, action.j, action.k);
    default:
      return state;
  }
}

export default boards;
