'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var Highlight = require('react-highlight');
var bugStore = require('stores/BugSourceStore');

//require('highlight.js/styles/darkula.css');
require('styles/Bug.less');

var Bug = React.createClass({

  mixins: [Reflux.connect(bugStore, "bug")],

  getInitialState: function() {
    return {
      bug: ''
    };
  },

  render: function () {
    return (
      <Highlight className="Bug java">{this.state.bug}</Highlight>
    );
  }
});

module.exports = Bug;

