import React from 'react';

const CardInput = React.createClass({
  addDeck: function(e) {
    e.preventDefault();
    this.props.onSubmit({
      title: this.refs.title.value
    });
    this.refs.title.value = '';
  },
  render: function () {
    return (
      <div className="card-form">
        <form onSubmit={this.addCard}>
          <input className="card-input" ref="title" type="text"
          placeholder="new card" />
        </form>
      </div>
    );
  },
});

export default CardInput;
