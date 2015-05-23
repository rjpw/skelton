'use strict';

describe('BugStrip', function () {
  var React = require('react/addons');
  var BugStrip, component;

  beforeEach(function () {
    BugStrip = require('components/BugStrip.js');
    component = React.createElement(BugStrip);
  });

  it('should create a new instance of BugStrip', function () {
    expect(component).toBeDefined();
  });
});
