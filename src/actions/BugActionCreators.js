'use strict';

var Reflux = require('reflux');
var request = require('superagent');
var host = module.hot ? require('../util/apiHelper').host : '';
var javaPath = '/javasrc/apache-tomcat-6.0.41-src/java/';

var BugActionCreators  =  Reflux.createActions({
  "load":   {children: ["completed", "failed"]},
  "getSource":   {children: ["completed", "failed"]}
});

BugActionCreators.search = Reflux.createAction();

BugActionCreators.load.listen( function () {

  request
    .get(host + '/BugsApi/bugs/all')
    .set('Accept', 'application/json')
    .on('error', this.failed )
    .end( this.completed );

});

BugActionCreators.getSource.listen( function (bug) {

  request
    .get(javaPath + bug.SourceLine._sourcepath)
    .set('Accept', 'text/plain')
    .on('error', this.failed )
    .end( this.completed );

});

module.exports = BugActionCreators;
