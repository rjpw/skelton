'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var d3 = require('d3');
var _ = require('lodash');

var VisBase = require('./VisBase');
var DataGroup = require('./DataGroup');

// question: does this create a store, or use the one we already have?
var heatMapStore = require('stores/HeatMapStore');

require('styles/HeatMap.less');

var HeatMap = React.createClass({displayName: 'HeatMap',

  mixins: [
    Reflux.connect(heatMapStore, "catRanks")
  ],

  getInitialState: function () {

    var marginBase = {top: 10, right: 45, bottom: 20, left: 45};

    var outerWidth = this.props.width;
    var outerHeight = this.props.height;

    var innerWidth = outerWidth - marginBase.left - marginBase.right;
    var innerHeight = outerHeight - marginBase.top - marginBase.bottom;

    var minMax = [0, 9999];

    var colorScale = d3.scale.quantize()
      .domain(minMax)
      .range(d3.range(11).map(function(d) { return "q" + d + "-11"; }));

    var categories = [
      "MALICIOUS_CODE", 
      "STYLE", 
      "PERFORMANCE", 
      "BAD_PRACTICE", 
      "MT_CORRECTNESS", 
      "CORRECTNESS", 
      "I18N", 
      "EXPERIMENTAL", 
      "SECURITY",
      "NOISE"];

    return { data: [],
      margin: marginBase,
      xScale: d3.scale.linear().range([0, innerWidth ]).domain([1, 20]),
      yScale: d3.scale.ordinal().rangePoints([innerHeight, 0]).domain(categories),
      colorScale: colorScale,
      dragging: false,
      dragElement: '',
      dragStart: -9999
    };

  },

  render: function() {

    var innerWidth = this.props.width - this.state.margin.left - this.state.margin.right;
    var innerHeight = this.props.height - this.state.margin.top - this.state.margin.bottom;

    var minMax = [0, Number.MIN_VALUE];

    if (this.state.catRanks) {
      this.state.catRanks.map(function (cr) {
        if (cr.count < minMax[0]) { minMax[0] = cr.count; }
        if (cr.count > minMax[1]) { minMax[1] = cr.count; }
      });
    }

    var colorScale = d3.scale.quantize()
      .domain(minMax)
      .range(d3.range(11).map(function(d) { return "q" + d + "-11"; }));

    return (

      React.createElement(VisBase, {
        width: this.props.width,
        height: this.props.height,
        margin: this.state.margin},

        React.createElement(DataGroup, {
          data: this.state.catRanks,
          width: innerWidth,
          height: innerHeight,
          brush: this.state.brush,
          xScale: this.state.xScale,
          yScale: this.state.yScale,
          colorScale: colorScale}))
    );
  }

});

module.exports = HeatMap; 
