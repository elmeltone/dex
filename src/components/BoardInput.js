import React from 'react';

const BoardInput = React.createClass({
  addBoard: function(e) {
    e.preventDefault();
    this.props.onSubmit({
      title: this.refs.title.value
    });
    this.refs.title.value = '';
  },
  render: function () {
    return (
      <div className="board-form">
        <form onSubmit={this.addBoard}>
          <input className="board-input" ref="title" type="text"
          placeholder="new board" />
        </form>
      </div>
    );
  },
});

export default BoardInput;
