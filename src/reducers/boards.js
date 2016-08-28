function boards(state = [], action) {
  switch(action.type){
    case 'ADD_BOARD':
    console.log(action);
      return [...state,{
        id: state.length,
        title: action.payload.title,
        decks: []
      }];
    default:
      return state;
  }
}

export default boards;
