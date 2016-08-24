import React from 'react';

/*import Icon from './Icon';
import BoardInput from './BoardInput';*/

export default class IconList extends React.Component {

  render() {
    return (
      <div className="icons">
        { this.props.children }
      </div>
    );
  }
};
