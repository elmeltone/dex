import React from 'react';
import { Link } from 'react-router';

const Deck = React.createClass({
  render() {
    const { deck } = this.props;

    return (
      <div className='decks'>
        {deck.title}
      </div>
    )
  }
});

export default Deck;
