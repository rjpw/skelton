'use strict';

describe('BugList', function () {
  var React = require('react/addons');
  var BugList, component;

  beforeEach(function () {
    BugList = require('components/BugList.js');
    component = React.createElement(BugList);
  });

  it('should create a new instance of BugList', function () {
    expect(component).toBeDefined();
  });
});
