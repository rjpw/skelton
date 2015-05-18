'use strict';

describe('BugStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/BugStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
