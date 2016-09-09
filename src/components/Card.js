import React from 'react';
import { Link } from 'react-router';

const Card = React.createClass({
  render() {
    const { card } = this.props;
    return (
      <div className="cards">
        <p className="card-text">{card.text}</p>
        <span
            className="delete card"
            onClick={this.props.deleteCard.bind(null, this.props.params.boardId, this.props.j, this.props.k)}
          >
          <div className="delete">&times;</div>
        </span>
      </div>
    )
  }
});

export default Card;
