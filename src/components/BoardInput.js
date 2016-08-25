import React from 'react';

const BoardInput = React.createClass({

  render: function () {
    return (
      <div className="board-form">
        <form onSubmit={this.handleNewBoard}>
          <input className="board-input" ref="title" type="text"
          placeholder="new board" />
        </form>
      </div>
    );
  },
});

export default BoardInput;
