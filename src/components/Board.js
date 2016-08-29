import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Deck from './Deck';
import DeckInput from './DeckInput';
import { addDeck, deleteDeck } from '../actions/actionCreators';

const mapStateToProps = function(state) {
  return {
    boards: state.boards,
  }
}

const Board = React.createClass({
  render() {
    let board = this.props.boards.find(board => board.id == this.props.params.boardId);
    return (
      <div className='boards'>
        <h3>{board.title}</h3>
        {board.decks.map((deck, i) => <Deck {...this.props} key={i} i={i} deck={deck} />)}
        <DeckInput onSubmit={this.props.addDeck} cards={[]} {...this.props} />
      </div>
    )
  }
});

export default connect(mapStateToProps)(Board);
