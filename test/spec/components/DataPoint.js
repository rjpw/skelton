'use strict';

describe('DataPoint', function () {
  var React = require('react/addons');
  var DataPoint, component;

  beforeEach(function () {
    DataPoint = require('components/DataPoint.js');
    component = React.createElement(DataPoint);
  });

  it('should create a new instance of DataPoint', function () {
    expect(component).toBeDefined();
  });
});
