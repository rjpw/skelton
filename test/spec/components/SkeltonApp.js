'use strict';

describe('SkeltonApp', function () {
  var React = require('react/addons');
  var SkeltonApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SkeltonApp = require('components/SkeltonApp.js');
    component = React.createElement(SkeltonApp);
  });

  it('should create a new instance of SkeltonApp', function () {
    expect(component).toBeDefined();
  });
});
