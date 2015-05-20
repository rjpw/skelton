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
    var cname = (bug.SourceLine && bug.SourceLine._sourcefile) ? bug.SourceLine._sourcefile : 'unknown';
    return (<li onClick={this._click}>({bug._abbrev}) {cname}</li>);
  }

});

module.exports = BugEntry;

