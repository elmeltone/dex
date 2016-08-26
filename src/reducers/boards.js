function boards(state = [], action) {
  switch(action.type){
    case 'ADD_BOARD':
    console.log(action);
      return [...state,{
        title: action.payload.title,
        decks: []
      }];
    default:
      return state;
  }
}

export default boards;
