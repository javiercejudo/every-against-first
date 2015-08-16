'use strict';

require('should');

var everyAgainstFirst = require('../src/everyAgainstFirst.js');
var fixtures = require('../fixtures/callbacks');

describe('every-against-first', function () {
  it('should execute test for the every element against the first', function () {
    everyAgainstFirst([5, 7, 10], fixtures.isAscendingPair).should.be.exactly(true);
    everyAgainstFirst([5, 7, 4], fixtures.isAscendingPair).should.be.exactly(false);
  });

  it('should return true when array is shorter than 2', function () {
    everyAgainstFirst([1], fixtures.isAscendingPair).should.be.exactly(true);
    everyAgainstFirst([], fixtures.isAscendingPair).should.be.exactly(true);
  });

  it('should pass index and array to the callback', function () {
    everyAgainstFirst([1, 2, 3, 4], fixtures.isConsecutive).should.be.exactly(true);
  });

  it('should execute the callback with the provided thisArg as this', function () {
    everyAgainstFirst([3, -5], fixtures.isAscendingAbsValue, Math).should.be.exactly(true);
    everyAgainstFirst([-3, -2], fixtures.isAscendingAbsValue, Math).should.be.exactly(false);
  });
});
