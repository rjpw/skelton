'use strict';

var Reflux = require('reflux');
var Actions = require('actions/HeatMapActionCreators');

var HeatMapStore = Reflux.createStore({

  listenables: Actions,

  onLoad: function(err, res) {
    console.log("HeatMap load initiated");
  },

  onLoadCompleted: function(err, res) {
    console.log("HeatMap load completed");
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

module.exports = HeatMapStore; 

