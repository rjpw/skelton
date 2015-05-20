'use strict';

describe('DataGroup', function () {
  var React = require('react/addons');
  var DataGroup, component;

  beforeEach(function () {
    DataGroup = require('components/DataGroup.js');
    component = React.createElement(DataGroup);
  });

  it('should create a new instance of DataGroup', function () {
    expect(component).toBeDefined();
  });
});
