import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import boards from './data/boards';

const defaultState = {
  boards
};

export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
