import guid from '../data/guid';

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

export default boards;
