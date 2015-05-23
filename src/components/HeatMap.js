'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var d3 = require('d3');
var _ = require('lodash');

var VisBase = require('./VisBase');
var DataGroup = require('./DataGroup');

// question: does this create a store, or use the one we already have?
var heatMapStore = require('stores/HeatMapStore');
var messageStore = require('stores/MessageStore');

require('styles/HeatMap.less');

var HeatMap = React.createClass({displayName: 'HeatMap',

  mixins: [
    Reflux.connect(heatMapStore, "catRanks"),
    Reflux.connect(messageStore, "messages")
  ],

  getInitialState: function () {

    var marginBase = {top: 10, right: 45, bottom: 20, left: 45};

    console.log('heatmap props', this.props);

    var outerWidth = this.props.calculatedWidth;
    var outerHeight = this.props.calculatedHeight;

    var innerWidth = outerWidth - marginBase.left - marginBase.right;
    var innerHeight = outerHeight - marginBase.top - marginBase.bottom;

    var minMax = [0, 9999];

    var colorScale = d3.scale.quantize()
      .domain(minMax)
      .range(d3.range(11).map(function(d) { return "q" + d + "-11"; }));

    // statically defined categories ... 
    // could be replaced if needed from messageStore
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
      yScale: d3.scale.ordinal().rangePoints([0, innerHeight]).domain(categories),
      colorScale: colorScale,
      dragging: false,
      dragElement: '',
      dragStart: -9999
    };

  },

  render: function() {

    var outerWidth = this.props.calculatedWidth;
    var outerHeight = this.props.calculatedHeight;
    var innerWidth = outerWidth - this.state.margin.left - this.state.margin.right;
    var innerHeight = outerHeight - this.state.margin.top - this.state.margin.bottom;

    var minMax = [0, Number.MIN_VALUE];

    // recalculate min and max values based on logarithmic scale
    if (this.state.catRanks) {
      this.state.catRanks.map(function (cr) {
        if (Math.log(cr.count) < minMax[0]) { minMax[0] = Math.log(cr.count); }
        if (Math.log(cr.count) > minMax[1]) { minMax[1] = Math.log(cr.count); }
      });
    }

    var colorScale = d3.scale.quantize()
      .domain(minMax)
      .range(d3.range(9).map(function(d) { return "q" + d + "-9"; }));

    return (

      React.createElement(VisBase, {
        width: this.props.calculatedWidth,
        height: this.props.calculatedHeight,
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
