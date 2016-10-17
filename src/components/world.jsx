import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  render() {
    var style = {
      display: 'inline-block'
    };
    return <h1 style={style}>World</h1>
  }
}

module.exports = World;
