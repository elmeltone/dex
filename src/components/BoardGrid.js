import React from 'react';
import Icon from './Icon';
import BoardInput from './BoardInput';

const BoardGrid = React.createClass({
  render() {
    return (
      <div className='board-grid'>
        {this.props.boards.map((board, i) => <Icon {...this.props} key={i} i={i} board={board} />)}
        <BoardInput />
      </div>
    )
  }
});

export default BoardGrid;
