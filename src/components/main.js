'use strict';

var SkeltonApp = require('./SkeltonApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={SkeltonApp}>
    <Route name="/" handler={SkeltonApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
