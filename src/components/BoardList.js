import React from 'react';

import Board from './Board';

export default class BoardList extends React.Component {
  render() {
    /*const { query } = this.props.location;
    const { params } = this.props;
    const { board } = params;
    //const { date, filter } = query;

    const Boards = [
      "YESTERDAY",
      "Today",
      "Tomorrow",
      "This Week",
      "This Month",
      "This Year",
    ].map((title, i) => <Board key={i} title={title}/> );*/
    console.log(this.props);
    return (
      <div>
        BoardList Component
      </div>
    );
  }
}
