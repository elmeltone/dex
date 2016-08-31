import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Card from './Card';
import CardInput from './CardInput';
import { addCard, deleteCard } from '../actions/actionCreators';

const mapStateToProps = function(state) {
  return {
    cards: state.cards
  }
}

const mapActionsToDispatch = {
  addCard,
  deleteCard
}

const Deck = React.createClass({
  handleAddCard(card) {
    this.props.addCard(this.props.params.boardId, this.props.i, card);
  },
  render() {
    const { deck } = this.props;
    return (
      <div className='decks'>
        <h4>{deck.title}</h4>
        <span
            className="delete deck"
            onClick={this.props.deleteDeck.bind(null, this.props.params.boardId, this.props.i)}
          >
            <div className="delete">&times;</div>
          </span>
        {deck.cards.map((card, i) => <Card {...this.props} key={i} i={i} card={card} />)}
        <CardInput onSubmit={(card) => this.handleAddCard(card)} deck={deck} {...this.props} />
      </div>
    )
  }
});

export default connect(mapStateToProps, mapActionsToDispatch)(Deck);
