'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var bugStore = require('stores/BugStore');
var categoryStore = require('stores/CategoryStore');

require('styles/BugList.less');

var BugList = React.createClass({

  mixins: [Reflux.connect(bugStore, "bugs")],

  render: function () {
    return (
        <div className="BugList">
          <p>Bugs Loaded: {this.state.bugs.length}.</p>
        </div>
      );
  }
});

module.exports = BugList;

