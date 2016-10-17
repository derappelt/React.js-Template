var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/main.jsx');

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

  var routes = (

  <Route path='/' component={Main}>
    <IndexRoute />
    <Route path='*' component={NotFound} />
  </Route>
);

module.exports = routes;
