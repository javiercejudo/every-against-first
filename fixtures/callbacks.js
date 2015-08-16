/*jshint node:true, mocha:true */

'use strict';

module.exports = {
  isAscendingPair: isAscendingPair,
  isAscendingAbsValue: isAscendingAbsValue,
  isConsecutive: isConsecutive
};


function isAscendingPair(a, b) {
  return b > a;
}

function isAscendingAbsValue(a, b) {
  return this.abs(b) > this.abs(a);
}

function isConsecutive(a, x, index, array) {
  return a + index === x && a + index === array[index - 1];
}
