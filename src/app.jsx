var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./config/routes');
// var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)
