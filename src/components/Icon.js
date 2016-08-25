import React from 'react';
import { Link } from 'react-router';

export default class Icon extends React.Component {
  render() {
    return (
      <figure className='grid-figure'>
        {<div className='grid-icon-wrap'>
                  <Link to={`/view/${this.props.board.id}`}>
                    {this.props.board.title}
                    </Link>
                </div>}
      </figure>
    )
  }
}
