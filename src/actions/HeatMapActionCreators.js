'use strict';

var Reflux = require('reflux');
var request = require('superagent');
var host = module.hot ? require('../util/apiHelper').host : '';

var HeatMapActionCreators  =  Reflux.createActions({
  "load": {children: ["completed", "failed"]}
});

HeatMapActionCreators.load.listen(function() {

  request
    .get(host + '/BugsApi/catranked')
    .set('Accept', 'application/json')
    .on('error', this.failed )
    .end( this.completed );

});

module.exports = HeatMapActionCreators; 
