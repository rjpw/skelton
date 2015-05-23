'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var _ = require('lodash');

var bugStore = require('stores/BugStore');
var bugSourceStore = require('stores/BugSourceStore');
var sourceExtractor = require('../util/sourceExtractor');

require('styles/BugStrip.less');

var BugStrip = React.createClass({

  mixins: [
  	Reflux.connect(bugStore, "bugCollection"),
  	Reflux.connect(bugSourceStore, "bugSource")
	],

  getInitialState: function() {
    return {
      bugCollection: {
        bugs: [],
        _id: ''
      },
      bugSource: ''
    };
  },

  render: function () {

    var sourceLine;
    var id = this.state.bugCollection._id;
    var dummyExample = '*\n\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*';

    var bug = _.find(this.state.bugCollection.bugs, function (bug) {
    	return bug._id === id;
    });

    if (bug) {
    	sourceLine = sourceExtractor(bug);
    }

    var style = {paddingTop: '1.5em'};
    var lines = this.state.bugSource.split('\n');
    var bugFlags = new Array(lines.length);
    bugFlags.push('');

    if (sourceLine && _.has(sourceLine, '_start')) {
    	var startVal = +sourceLine._start - 1;
    	bugFlags[startVal] = "*";
    }

    var flaggedLines = bugFlags.join('\n');
    var bugStripStyle = {paddingTop: '1.5em', backgroundColor: '#FCFFF5'};

    return (<pre style={bugStripStyle}>{flaggedLines}</pre>);

  }

});

module.exports = BugStrip; 

