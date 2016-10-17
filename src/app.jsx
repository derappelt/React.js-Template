import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { Provider } from 'react-redux'

import counter from './reducers/counter';

let store = createStore(counter);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

render();
store.subscribe(render);
