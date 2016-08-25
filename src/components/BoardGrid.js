import React from 'react';
import Icon from './Icon';
import BoardInput from './BoardInput';

const BoardGrid = React.createClass({
  handleAddBoard(args) {
    console.log(args);
    this.props.addBoard(args);
  },
  render() {
    return (
      <div className='board-grid'>
        {this.props.boards.map((board, i) => <Icon {...this.props} key={i} i={i} board={board} />)}
        <BoardInput onSubmit={this.handleAddBoard} decks={[]} {...this.props} />
      </div>
    )
  }
});

export default BoardGrid;
