import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(todoApp);


ReactDOM.render(
  <Router history={hashHistory} store={store}>{routes}</Router>,
  document.getElementById('app')
)
