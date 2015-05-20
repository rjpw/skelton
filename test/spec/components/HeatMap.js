'use strict';

describe('HeatMap', function () {
  var React = require('react/addons');
  var HeatMap, component;

  beforeEach(function () {
    HeatMap = require('components/HeatMap.js');
    component = React.createElement(HeatMap);
  });

  it('should create a new instance of HeatMap', function () {
    expect(component).toBeDefined();
  });
});
