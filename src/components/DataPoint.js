'use strict';

var React = require('react/addons');

var Actions = require('actions/BugActionCreators');

require('styles/DataPoint.less');

var DataPoint = React.createClass({displayName: 'DataPoint',

	getInitialState: function() {
		return {
			hovering: false 
		};
	},

  getDefaultProps: function() {
    return { value: [0,0], radius: 3.5, selected: false };
  },

  _mouseEnter: function (evt) {
  	this.setState({hovering: true});
  },

  _mouseLeave: function (evt) {
  	this.setState({hovering: false});
  },

  _click: function (evt) {
  	Actions.search(this.props.data._id);
  },

  render: function() {

    var itemTranslate = 'translate(' + this.props.x + ',' + this.props.y + ')';
    var classString = this.props.color;

    if (this.state.hovering) {
    	classString += ' hover';
    }

    return (
    	React.createElement("rect", {
	    		width: 30, height: 30, rx: 4, ry: 4, 
	      	className: classString, 
	      	transform: itemTranslate,
	      	onMouseEnter: this._mouseEnter,
        	onMouseLeave: this._mouseLeave,
        	onClick: this._click
    		})
     );

  }

});

module.exports = DataPoint; 

