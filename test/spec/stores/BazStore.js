'use strict';

describe('BazStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/BazStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
