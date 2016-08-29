import React from 'react';
import { Link } from 'react-router';

const Icon = React.createClass({
  render() {
    return (
      <figure className='grid-figure'>
        {<div className='icons'>
          <span
            className="delete board-icon"
            onClick={this.props.deleteBoard.bind(null, this.props.params.boardId, this.props.i)}
          >
            <div className="delete">&times;</div>
          </span>
          <Link to={`/view/${this.props.board.id}`}>
            {this.props.board.title}
          </Link>
        </div>}
      </figure>
    )
  }
});

export default Icon;
