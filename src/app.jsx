import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Hello from './hello.jsx';
import World from './world.jsx';


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Hello}>
          <Route path="world" component={World}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));