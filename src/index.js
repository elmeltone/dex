import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Main from './components/Main';
import BoardGrid from './components/BoardGrid';
import Board from './components/Board';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={BoardGrid}></IndexRoute>
        <Route path='/view/:boardId' component={Board}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

