
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link} from 'react-router';

import Hello from './hello.jsx';
import World from './world.jsx';


export default class Main extends React.Component {
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
