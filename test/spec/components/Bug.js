'use strict';

describe('Bug', function () {
  var React = require('react/addons');
  var Bug, component;

  beforeEach(function () {
    Bug = require('components/Bug.js');
    component = React.createElement(Bug);
  });

  it('should create a new instance of Bug', function () {
    expect(component).toBeDefined();
  });
});
