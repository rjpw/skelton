'use strict';

var Reflux = require('reflux');
var Actions = require('actions/BugActionCreators');

var BugSourceStore = Reflux.createStore({

  listenables: Actions,

  text: '',

  onGetSourceCompleted: function (err, res) {
    this.text = res.text;
    this.trigger(this.text);
  },

  onGetSourceFailed: function (err, res) {
    console.log("Error during source load", err);
  }

});

module.exports = BugSourceStore;

