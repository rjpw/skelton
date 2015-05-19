'use strict';

var Reflux = require('reflux');
var request = require('superagent');
var host = module.hot ? require('../util/apiHelper').host : '';

var BugActionCreators  =  Reflux.createActions({
  "load": {children: ["completed", "failed"]}
});

BugActionCreators.load.listen( function() {

  request
    .get(host + '/BugsApi/bugs/all')
    .set('Accept', 'application/json')
    .on('error', this.failed )
    .end( this.completed );

});

module.exports = BugActionCreators;
