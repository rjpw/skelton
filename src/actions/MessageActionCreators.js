'use strict';

var Reflux = require('reflux');
var request = require('superagent');

// this creates 'load', 'load.completed' and 'load.failed'
var MessageActionCreators = Reflux.createActions({
  "load": {children: ["completed", "failed"]}
});

// when 'load' is triggered, call async operation and trigger related actions
MessageActionCreators.load.listen( function() {

  request
    .get('http://localhost:1880/BugsApi/messages')
    .set('Accept', 'application/json')
    .on('error', this.failed )
    .end( this.completed );     

});

module.exports = MessageActionCreators; 
