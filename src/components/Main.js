import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div id='masthead'>
          <h1 className='masthead'>
            <Link to='/'>dex</Link>
          </h1>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
