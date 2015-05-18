'use strict';

var Reflux = require('reflux');
//var Actions = require('actions/..');


var BugStore = Reflux.createStore({
  listenables: Actions,


});

module.exports = BugStore; 
