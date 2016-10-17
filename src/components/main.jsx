
import React from 'react';
import ReactDOM from 'react-dom';

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

import Hello from './hello.jsx';
import World from './world.jsx';


class Main extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Hello</Link>
        <Link to="/world">World</Link>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
