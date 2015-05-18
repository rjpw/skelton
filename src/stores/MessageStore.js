'use strict';

var Reflux = require('reflux');
var Actions = require('actions/MessageActionCreators');

var MessageStore = Reflux.createStore({

  listenables: Actions,

  onLoad: function(err, res) {
    console.log("Message load initiated");
  },

  onLoadCompleted: function(err, res) {

    console.log("Refreshing Message List");

    var messageList = {};

    res.body.map(function (mObj) {
    	messageList[mObj._id] = mObj.messages;
    });

    this.messageList = messageList;
    this.trigger(this.messageList);
    
  },

  onLoadFailed: function(err, res) {
    console.log("Error during message load", err);
  },

  getInitialState: function() {
  	this.messageList = {};
  	return this.messageList;
  },

});

module.exports = MessageStore; 
