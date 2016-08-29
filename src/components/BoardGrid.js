import React from 'react';
import { connect } from 'react-redux';
import Icon from './Icon';
import BoardInput from './BoardInput';
import { addBoard, deleteBoard } from '../actions/actionCreators';

const mapStateToProps = function(state) {
  return {
    boards: state.boards,
  }
}

const mapActionsToDispatch = {
  addBoard,
  deleteBoard
}

const BoardGrid = React.createClass({
  render() {
    console.log(this.props);
    return (
      <div className='board-grid'>
        {this.props.boards.map((board, i) => <Icon {...this.props} key={i} i={i} board={board} />)}
        <BoardInput onSubmit={this.props.addBoard} decks={[]} {...this.props} />
      </div>
    )
  }
});

export default connect(mapStateToProps, mapActionsToDispatch)(BoardGrid);
