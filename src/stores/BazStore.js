'use strict';

var Reflux = require('reflux');
//var Actions = require('actions/..');


var BazStore = Reflux.createStore({
  listenables: Actions,


});

module.exports = BazStore; 
