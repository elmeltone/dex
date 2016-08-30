import guid from '../data/guid';

function decks(state = [], action) {
  switch(action.type){
    case 'ADD_DECK':
      console.log(state, action);

      const nextBoard = state[action.boardId];
      nextBoard.decks = [...nextBoard.decks, action.payload];
      return [
        ...state.slice(0,action.boardId),
        nextBoard,
        ...state.slice(action.boardId + 1)
      ];

      return [...state,{
        id: guid(),
        title: action.payload.title,
        cards: []
      }];
    default:
      return state;
  }
}

export default decks;
