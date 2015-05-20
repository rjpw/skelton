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

    console.log(this.props);

    var style = {
      width: this.props.calculatedWidth,
      height: this.props.calculatedHeight,
      overflow: 'auto'
    };

    return (
      <Highlight className="Bug java" style={style} >{this.state.bug}</Highlight>
    );

  }
});

module.exports = Bug;

