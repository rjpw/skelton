'use strict';

var Reflux = require('reflux');
var request = require('superagent');
var host = module.hot ? require('../util/apiHelper').host : '';

// this creates 'load', 'load.completed' and 'load.failed'
var MessageActionCreators = Reflux.createActions({
  "load": {children: ["completed", "failed"]}
});

// when 'load' is triggered, call async operation and trigger related actions
MessageActionCreators.load.listen( function() {

  request
    .get(host + '/BugsApi/messages')
    .set('Accept', 'application/json')
    .on('error', this.failed )
    .end( this.completed );     

});

module.exports = MessageActionCreators; 
