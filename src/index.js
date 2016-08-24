import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import boards from '../utils/boards.js';
import App from './App.js';
import IconList from './components/IconList';
import BoardList from './components/BoardList';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IconList}></IndexRoute>
      <Route path="boards(/:board)" name="boardlist" component={BoardList}></Route>
    </Route>
  </Router>,
  document.getElementById('root'));
