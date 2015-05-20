'use strict';

describe('BugEntry', function () {
  var React = require('react/addons');
  var BugEntry, component;

  beforeEach(function () {
    BugEntry = require('components/BugEntry.js');
    component = React.createElement(BugEntry);
  });

  it('should create a new instance of BugEntry', function () {
    expect(component).toBeDefined();
  });
});
