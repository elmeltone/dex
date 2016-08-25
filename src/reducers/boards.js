
function boards(state = [], action) {
  switch(action.type) {
    case 'DELETE_BOARD' :
      console.log("Deleting board!");
      const i = action.index;
      /*return [
        ...
      ]*/
  }
  return state;
};

export default boards;
