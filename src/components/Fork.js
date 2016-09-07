import React from 'react';
import { Link } from 'react-router';

const Fork = React.createClass({
  render() {
    return (
      <div className='fork'>
        <div className="fork-login">
          <h2 className="login">Log in / Register</h2>
          <h2 className="coming-soon">Coming soon!</h2>
        </div>
        <Link to="/demo">
          <div className="fork-demo">
            <h2>demo</h2>
          </div>
        </Link>
      </div>
    )
  }
});

export default Fork;
