import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    var style = {
      display: 'inline-block'
    };
    return <h1 style={style}>Hello</h1>
  }
}

module.exports = Hello;
