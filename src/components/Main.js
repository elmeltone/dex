import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Link to='/'>
          <div id='masthead'>
            <h1 className='masthead'>dex</h1>
          </div>
        </Link>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
