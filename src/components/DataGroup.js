'use strict';

var React = require('react/addons');
var DataPoint = require('./DataPoint');

//var Actions = require('actions/xxx')

require('styles/DataGroup.less');

var DataGroup = React.createClass({displayName: 'DataGroup',

  render: function () {

    var props = this.props,
      xFunc = props.xScale,
      yFunc = props.yScale,
      colFunc = props.colorScale,
      childElements = {};

    console.log('data', props.data.length);

    props.data.map( function (point, i) {

      var elId = 'dp_' + i;
      console.log('id', elId, point);

      childElements['dp_' + i] = React.createElement(DataPoint, {
        height:  props.height,
        width:  props.width,
        x: xFunc(point._id.rank),
        y: yFunc(point._id.category),
        color: colFunc(point.count),
        value:  point.count });


      // {
      //   _id: {
      //   category: "CORRECTNESS",
      //   rank: "2"
      //   }, 
      //   count: 1
      // }


    });

    return (React.createElement("g", {className: "RdYlGn"}, childElements));

  }

});

module.exports = DataGroup; 

var React = require('react');


module.exports = DataGroup;