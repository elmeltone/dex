import React from 'react';
import { Link } from 'react-router';
import Card from './Card';
import CardInput from './CardInput';

const Deck = React.createClass({
  render() {
    const { deck } = this.props;

    return (
      <div className='decks'>
        <h4>{deck.title}</h4>
        {deck.cards.map((card, i) => <Card {...this.props} key={i} i={i} card={card} />)}
        <CardInput onSubmit={(card) => this.handleAddCard(card)} deck={deck} {...this.props} />
      </div>
    )
  }
});

export default Deck;
