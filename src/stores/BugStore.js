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

  onSearch: function (term) {
    this.filterTerm = term;

    var filtered = [];

    this.bugList.map(function (bug) {
      if (bug._category === term.category && bug._rank === term.rank) {
        filtered.push(bug);
      }      
    });

    console.log(filtered);
    this.trigger(filtered);

  },

  getInitialState: function() {
    this.bugList = [];
    this.filterTerm = {};
    return this.bugList;
  }

});

module.exports = BugStore;

