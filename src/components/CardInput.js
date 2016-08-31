import React from 'react';

const CardInput = React.createClass({
  addCard: function(e) {
    e.preventDefault();
    this.props.onSubmit({
      title: this.refs.text.value
    });
    this.refs.text.value = '';
  },
  render: function () {
    return (
      <div className="card-form">
        <form onSubmit={this.addCard}>
          <input className="card-input" ref="text" type="text"
          placeholder="new card" />
        </form>
      </div>
    );
  },
});

export default CardInput;
