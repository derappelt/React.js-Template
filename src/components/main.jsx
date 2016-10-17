
import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';
import World from './world.jsx';


class Main extends React.Component {
  render() {
    return (
      <div>
        <Hello/>
        <World/>
      </div>
    );
  }
}

module.exports = Main;
