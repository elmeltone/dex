import guid from '../data/guid';

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

function deleteDeck(boards, boardId, i){
  return boards.map(function(board, index) {
    if (board.id === boardId) {
      board.decks = [
        ...board.decks.slice(0,i),
        ...board.decks.slice(i+1)
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
      return deleteDeck(state, action.boardId, action.i);
    default:
      return state;
  }
}

export default boards;
