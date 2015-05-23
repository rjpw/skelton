'use strict';

var React = require('react/addons');

var Actions = require('actions/BugActionCreators');
var sourceExtractor = require('../util/sourceExtractor');

require('styles/BugEntry.less');

var BugEntry = React.createClass({

  _click: function (evt) {
    Actions.getSource(this.props.bug);
    Actions.setCurrent(this.props.bug);
  },

  render: function () {

    var bug = this.props.bug;
    var cname = 'unknown';

    cname = sourceExtractor(bug)._sourcefile;

    return (<li onClick={this._click} style={{paddingLeft: '0.5em'}}>({bug._abbrev}) {cname}</li>);
  }

});

module.exports = BugEntry;

