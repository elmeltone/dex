import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div id="masthead">
          <h1 className='masthead'>dex</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
};
