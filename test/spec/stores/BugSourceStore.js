'use strict';

describe('BugSourceStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/BugSourceStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
