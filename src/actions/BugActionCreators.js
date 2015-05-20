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

	var path = '';

  if (bug.SourceLine) {
  	if (bug.SourceLine.length) {
  		path = bug.SourceLine[0]._sourcepath;
  	} else {
  		path = bug.SourceLine._sourcepath;
  	}
  } else {
  	if (bug.Class) {
  		if (bug.Class.SourceLine) {
  			if (bug.Class.SourceLine.length) {
  				path = bug.Class.SourceLine[0]._sourcepath;
  			} else {
  				path = bug.Class.SourceLine._sourcepath;
  			}
  		}
  	}
  }

  request
    .get(javaPath + path)
    .set('Accept', 'text/plain')
    .on('error', this.failed )
    .end( this.completed );

});

module.exports = BugActionCreators;
