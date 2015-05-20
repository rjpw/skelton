'use strict';

var Reflux = require('reflux');
var request = require('superagent');
var host = module.hot ? require('../util/apiHelper').host : '';

var BugActionCreators  =  Reflux.createActions({
  "load":   {children: ["completed", "failed"]}
});

BugActionCreators.search = Reflux.createAction();

BugActionCreators.load.listen( function () {

  request
    .get(host + '/BugsApi/bugs/all')
    .set('Accept', 'application/json')
    .on('error', this.failed )
    .end( this.completed );

});

// BugActionCreators.search.listen( function (term) {
// 	console.log('term', term);
// });

module.exports = BugActionCreators;
