'use strict';

var Reflux = require('reflux');
var Actions = require('actions/BugActionCreators');


var BugStore = Reflux.createStore({

  listenables: Actions,

  data: {
    buglist: [],
    filterTerm: {category: 'SECURITY', rank: '1'},
    bugSource: ''
  },

  onLoad: function(err, res) {
    console.log("Bug list load initiated");
  },

  onLoadCompleted: function(err, res) {
    console.log("Bug list load completed");
    this.data.bugList = res.body;
    this.update();
  },

  onLoadFailed: function(err, res) {
    console.log("Error during message load", err);
  },

  onSearch: function (term) {
    this.data.filterTerm = term;
    this.update();
  },

  update: function () {

    var filtered = [];
    var term = this.data.filterTerm;

    this.data.bugList.map(function (bug) {
      if (bug._category === term.category && bug._rank === term.rank) {
        filtered.push(bug);
      }
    });

    this.trigger(filtered);

  }

});

module.exports = BugStore;

