'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var bugStore = require('stores/BugSourceStore');

require('styles/Bug.less');

var Bug = React.createClass({

  mixins: [Reflux.connect(bugStore, "bug")],

  getInitialState: function() {
    return {
      bug: ''
    };
  },

  render: function () {
    console.log('bug', this.state);
    return (
      <div className="Bug">
        <pre>{this.state.bug}</pre>
      </div>
    );
  }
});

module.exports = Bug;

