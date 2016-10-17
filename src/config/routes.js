import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';

import Main from '../components/main.jsx';
import Hello from '../components/hello.jsx';
import World from '../components/world.jsx';

const NotFound = (
  <h1>404.. This page is not found!</h1>
);

var routes = (
  <Route path='/' component={Main}>
    <IndexRoute component={Hello} />
    <Route path="world" component={World} />
    <Route path='*' component={NotFound} />
  </Route>
);

module.exports = routes;
