import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './components/Main';
import BoardGrid from './components/BoardGrid';
import Board from './components/Board';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={BoardGrid}></IndexRoute>
      <Route path='/view/:boardId' component={Board}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));

