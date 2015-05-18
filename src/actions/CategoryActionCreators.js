'use strict';

var Reflux = require('reflux');
var request = require('superagent');

var CategoryActionCreators  =  Reflux.createActions({
  "load": {children: ["completed", "failed"]}
});

CategoryActionCreators.load.listen( function() {

  request
    .get('http://localhost:1880/BugsApi/categories')
    .set('Accept', 'application/json')
    .on('error', this.failed )
    .end( this.completed );     

});

module.exports = CategoryActionCreators; 
