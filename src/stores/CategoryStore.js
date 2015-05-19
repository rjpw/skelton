'use strict';

var Reflux = require('reflux');
var Actions = require('actions/CategoryActionCreators');

var CategoryStore = Reflux.createStore({

  listenables: Actions,

  onLoad: function(err, res) {
    console.log("Category load initiated");
  },

  onLoadCompleted: function(err, res) {
    console.log("Category load completed");
    this.categoryList = res.body;
    this.trigger(this.categoryList);
  },

  onLoadFailed: function(err, res) {
    console.log("Error during message load", err);
  },

  getInitialState: function() {
  	this.categoryList = [];
  	return this.categoryList;
  }

});

module.exports = CategoryStore;
