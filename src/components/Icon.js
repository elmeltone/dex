import React from 'react';
import { Link } from 'react-router';

const Icon = React.createClass({
  render() {
    return (
      <figure className='grid-figure'>
        <Link to={`/view/${this.props.board.id}`}>
          {<div className='icons'>
            <span
              className="delete board-icon"
              onClick={this.props.deleteBoard.bind(null, this.props.params.boardId, this.props.i)}
            >
              <div className="delete">&times;</div>
            </span>
              {this.props.board.title}
          </div>}
        </Link>
      </figure>
    )
  }
});

export default Icon;
