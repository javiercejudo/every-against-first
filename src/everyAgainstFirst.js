'use strict';

module.exports = function everyAgainstFirst(origArray, callback, thisArg) {
  var array = origArray.slice();
  var first = array.shift();

  return array.every(function (current, index) {
    return callback.call(thisArg, first, current, index + 1, array);
  });
};
