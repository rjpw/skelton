'use strict';

var Reflux = require('reflux');
var Actions = require('actions/BugActionCreators');


var BugStore = Reflux.createStore({

  listenables: Actions,

  onLoad: function(err, res) {
    console.log("Bug list load initiated");
  },

  onLoadCompleted: function(err, res) {
    console.log("Bug list load completed");
    this.bugList = res.body;
    this.trigger(this.bugList);
  },

  onLoadFailed: function(err, res) {
    console.log("Error during message load", err);
  },

  getInitialState: function() {
    this.bugList = [];
    return this.bugList;
  }

});

module.exports = BugStore;

