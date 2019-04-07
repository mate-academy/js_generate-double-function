'use strict';

/**
 * Implement generateDoubleFunction function:
 *
 * It takes function and returns another function. Calling returned function
 * gives 2 times bigger result then calling given function.
 *
 * const initialFunction = function(x) {
 *     return x * x
 * }
 * const doubledFunction = generateDoubleFunction(initialFunction);
 * doubledFunction(5) === 50; // 5 * 5 * 2 = 50
 * doubledFunction(4) === 32; // 4 * 4 * 2 = 32
 *
 * const initialFunction = function(x) {
 *     return x + x
 * }
 * const doubledFunction = generateDoubleFunction(initialFunction);
 * doubledFunction(5) === 20; // (5 + 5) * 2 = 20
 * doubledFunction(4) === 16; // (4 + 4) * 2 = 16
 *
 * @param {function} initialFunction
 *
 * @returns {function}
 */
function generateDoubleFunction(initialFunction) {
  // write code here
}

module.exports = generateDoubleFunction;
