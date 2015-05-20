'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var BugList = require('./BugList');
var Bug = require('./Bug');
var CategoryCollection = require('./CategoryCollection');
var HeatMap = require('./HeatMap');

var messageActions = require('actions/MessageActionCreators');
var messageStore = require('stores/MessageStore');

var categoryActions = require('actions/CategoryActionCreators');
var categoryStore = require('stores/CategoryStore');

var bugActions = require('actions/BugActionCreators');
var bugStore = require('stores/BugStore');
var bugSourceStore = require('stores/BugSourceStore');

var heatMapActions = require('actions/HeatMapActionCreators');
var heatMapStore = require('stores/HeatMapStore');

// CSS
require('normalize.css');
require('../styles/main.css');

var SkeltonApp = React.createClass({

  render: function() {
    return (
      <div className='main'>
        <HeatMap width='700' height='350'></HeatMap>
        <BugList></BugList>
        <Bug></Bug>
      </div>
    );
  }
});

categoryActions.load();
messageActions.load();
bugActions.load();
heatMapActions.load();

module.exports = SkeltonApp;
