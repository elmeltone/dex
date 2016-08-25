import React from 'react';
import { Link } from 'react-router';

export default class Icon extends React.Component {
  render() {
    return (
      <figure className='grid-figure'>
        {<div className='icons'>
          <span
            className="delete board-icon"
            onClick={this.handleDeleteBoard}
          >
            <div>x</div>
          </span>
          <Link to={`/view/${this.props.board.id}`}>
            {this.props.board.title}
          </Link>
        </div>}
      </figure>
    )
  }
}
