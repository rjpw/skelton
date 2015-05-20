'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/DataPoint.less');

var DataPoint = React.createClass({displayName: 'DataPoint',

  getDefaultProps: function() {
    return { value: [0,0], radius: 3.5, selected: false };
  },

  render: function() {

    var itemTranslate = 'translate(' + this.props.x + ',' + this.props.y + ')';

    return (React.createElement("rect", {width: 25, height: 20, rx: 2, ry: 2, 
      className: this.props.color, transform: itemTranslate}));

  }

});

module.exports = DataPoint; 

