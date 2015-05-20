'use strict';

var React = require('react/addons');

var Actions = require('actions/BugActionCreators');

require('styles/BugEntry.less');

var BugEntry = React.createClass({

  _click: function (evt) {
    Actions.getSource(this.props.bug);
  },

  render: function () {

    var bug = this.props.bug;
    var cname = 'unknown';

    if (bug.SourceLine) {
    	if (bug.SourceLine.length) {
    		cname = bug.SourceLine[0]._sourcefile;
    	} else {
    		cname = bug.SourceLine._sourcefile;
    	}
    } else {
    	if (bug.Class) {
    		if (bug.Class.SourceLine) {
    			if (bug.Class.SourceLine.length) {
    				cname = bug.Class.SourceLine[0]._sourcefile;
    			} else {
    				cname = bug.Class.SourceLine._sourcefile;
    			}
    		}
    	}
    }
    
    return (<li onClick={this._click}>({bug._abbrev}) {cname}</li>);
  }

});

module.exports = BugEntry;

