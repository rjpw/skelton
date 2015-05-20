'use strict';

describe('VisBase', function () {
  var React = require('react/addons');
  var VisBase, component;

  beforeEach(function () {
    VisBase = require('components/VisBase.js');
    component = React.createElement(VisBase);
  });

  it('should create a new instance of VisBase', function () {
    expect(component).toBeDefined();
  });
});
