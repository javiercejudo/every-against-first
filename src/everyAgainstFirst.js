'use strict';

module.exports = function everyAgainstFirst(array, callback, thisArg) {
  var first = array.shift();

  return array.every(function (current, index) {
    return callback.call(thisArg, first, current, index + 1, array);
  });
};
