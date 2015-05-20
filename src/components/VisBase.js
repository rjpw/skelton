'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/VisBase.less');

var VisBase = React.createClass({displayName: 'VisBase',
  render: function() {

    var translate = 'translate(' +
      this.props.margin.left + ',' +
      this.props.margin.top + ')';

    return (
      React.createElement("div", null,
        React.createElement("svg", {
          width: this.props.width,
          height: this.props.height},
          React.createElement("g", {transform: translate}, this.props.children)
        )
      )
    );
  }
});

module.exports = VisBase; 
