'use strict';

describe('CategoryStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/CategoryStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
