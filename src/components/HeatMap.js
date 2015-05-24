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

    var outerWidth = this.props.calculatedWidth;
    var outerHeight = this.props.calculatedHeight;

    var innerWidth = outerWidth - marginBase.left - marginBase.right;
    var innerHeight = outerHeight - marginBase.top - marginBase.bottom;

    var colorScale = d3.scale.quantize()
      .domain([1, Math.log(1000)])
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

    return { margin: marginBase,
      xScale: d3.scale.linear().range([0, innerWidth ]).domain([1, 20]),
      yScale: d3.scale.ordinal().rangePoints([0, innerHeight]).domain(categories),
      colorScale: colorScale,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      categories: categories
    };

  },

  componentWillReceiveProps: function(nextProps) {

    var marginBase = this.state.margin;
    var innerWidth = nextProps.calculatedWidth - marginBase.left - marginBase.right;
    var innerHeight = nextProps.calculatedHeight - marginBase.top - marginBase.bottom;

    this.setState({
      xScale: d3.scale.linear().range([0, innerWidth ]).domain([1, 20]),
      yScale: d3.scale.ordinal().rangePoints([0, innerHeight]).domain(this.state.categories),
      innerWidth: innerWidth,
      innerHeight: innerHeight
    });

  },

  render: function() {

    var numberOfColours = 9; // see class .YlOrRd in styles/DataPoint.less
    var colorScale;

    if (this.state.catRanks && this.state.catRanks.length > 0) {

      // Note: taking the max from the server because we know
      // that the data was sorted before being sent here
      var maxCount = Math.log(this.state.catRanks[0].count);
      var cellCount = this.state.catRanks.length;

      // maps a real number to a colour class of the form 'q0-9'
      colorScale = d3.scale.quantize()
        .domain([0, maxCount])
        .range(d3.range(numberOfColours).map(function(d) {
          return "q" + d + "-" + numberOfColours;
        }));

    } else {
      colorScale = d3.scale.quantize()
        .domain([0, Math.log(1000)])
        .range(d3.range(numberOfColours).map(function(d) {
          return "q" + d + "-" + numberOfColours;
        }));
    }

    return (

      React.createElement(VisBase, {
        width: this.props.calculatedWidth,
        height: this.props.calculatedHeight,
        margin: this.state.margin},

        React.createElement(DataGroup, {
          data: this.state.catRanks,
          width: this.state.innerWidth,
          height: this.state.innerHeight,
          xScale: this.state.xScale,
          yScale: this.state.yScale,
          colorScale: colorScale}))

    );
  }

});

module.exports = HeatMap;
