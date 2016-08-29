import React from 'react';
import { Link } from 'react-router';
import Deck from './Deck';
import DeckInput from './DeckInput';
import { addDeck, deleteDeck } from '../actions/actionCreators';

export default class Board extends React.Component {
  render() {
    let board = 0;
    for (var i = 0; i < this.props.boards.length; i++) {
      if (this.props.boards[i].id == this.id) {
        board = i;
      };
    };
    return (
      <div className='boards'>
        {this.props.boards[board].decks.map((deck, i) => <Deck {...this.props} key={i} i={i} deck={deck} />)}
        <DeckInput onSubmit={this.props.addDeck} cards={[]} {...this.props} />
      </div>
    )
  }
}
