import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Deck from './Deck';
import DeckInput from './DeckInput';
import { addDeck, deleteDeck } from '../actions/actionCreators';

const mapStateToProps = function(state) {
  return {
    decks: state.decks,
  }
}

const mapActionsToDispatch = {
  addDeck,
  deleteDeck
}

const Board = React.createClass({
  handleAddDeck(deck) {
    this.props.addDeck(this.props.params.boardId, deck);
  },

  render() {
    let board = this.props.boards.find(board => board.id == this.props.params.boardId);
    return (
      <div className='boards'>
        <Link to="/demo">
          <div className="board-demo">
            <h4 className="demo-link">demo home</h4>
          </div>
        </Link>
        <h3>{board.title}</h3>
        {board.decks.map((deck, j) => <Deck {...this.props} key={j} j={j} deck={deck} />)}
        <DeckInput onSubmit={(deck) => this.handleAddDeck(deck)} board={board} cards={[]} {...this.props} />
      </div>
    )
  }
});

export default connect(mapStateToProps, mapActionsToDispatch)(Board);
