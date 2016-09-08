import React from 'react';
import { Link } from 'react-router';

const Fork = React.createClass({
  render() {
    return (
      <div className='fork'>
        <Link to="/demo">
          <div className="fork-demo">
            <h2 className="demo-title">demo</h2>
          </div>
        </Link>
        <div className="fork-login">
          <h5 className="login">Log in / Register</h5>
          <h5 className="login line2">coming soon</h5>
        </div>
      </div>
    )
  }
});

export default Fork;
