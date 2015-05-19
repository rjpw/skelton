'use strict';

var Reflux = require('reflux');
var request = require('superagent');
var host = module.hot ? require('../util/apiHelper').host : '';

var CategoryActionCreators  =  Reflux.createActions({
  "load": {children: ["completed", "failed"]}
});

CategoryActionCreators.load.listen( function() {

  request
    .get(host + '/BugsApi/categories')
    .set('Accept', 'application/json')
    .on('error', this.failed )
    .end( this.completed );     

});

module.exports = CategoryActionCreators; 
