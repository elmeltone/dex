import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import Fork from './components/Fork';
import BoardGrid from './components/BoardGrid';
import Board from './components/Board';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Fork}></IndexRoute>
        <Route path='/demo' component={BoardGrid}></Route>
        <Route path='/view/:boardId' component={Board} id=':boardId'></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

