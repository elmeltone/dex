import React from 'react';

const DeckInput = React.createClass({
  /*addBoard: function(e) {
    e.preventDefault();
    this.props.onSubmit({
      title: this.refs.title.value
    });
    this.refs.title.value = '';
  },*/
  render: function () {
    return (
      <div className="deck-form">
        <form onSubmit={this.addDeck}>
          <input className="deck-input" ref="title" type="text"
          placeholder="new deck" />
        </form>
      </div>
    );
  },
});

export default DeckInput;
