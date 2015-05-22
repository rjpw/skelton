'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var BugEntry = require('./BugEntry');

var bugStore = require('stores/BugStore');
var categoryStore = require('stores/CategoryStore');

require('styles/BugList.less');

var BugList = React.createClass({

  mixins: [Reflux.connect(bugStore, "bugs")],

  getInitialState: function() {
    return {
      bugs: []
    };
  },

  _click: function (evt) {
    console.log(evt);
  },

  render: function () {

    var children = {};
    var self = this;

    this.state.bugs.map(function (bug) {
      children[bug._id] = <BugEntry bug={bug}></BugEntry>;
    });

    return (
      <ul className="BugList">
        {children}
      </ul>
    );
  }
});

module.exports = BugList;

