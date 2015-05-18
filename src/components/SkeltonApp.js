'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var Message = require('./Message');
var CategoryCollection = require('./CategoryCollection');

var messageActions = require('actions/MessageActionCreators');
var messageStore = require('stores/MessageStore');

var categoryActions = require('actions/CategoryActionCreators');
var categoryStore = require('stores/CategoryStore');


// CSS
require('normalize.css');
require('../styles/main.css');

var SkeltonApp = React.createClass({

  render: function() {
    return (
      <div className='main'>
        <CategoryCollection></CategoryCollection>
      </div>
    );
  }
});

categoryActions.load();
messageActions.load();

module.exports = SkeltonApp;
