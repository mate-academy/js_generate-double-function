'use strict';

const generateDoubleFunction = require('./generateDoubleFunction');

test('generateDoubleFunction returns a function', () => {
  expect(generateDoubleFunction((x) => x))
    .toBeInstanceOf(Function);
});

test('Second call returns doubled value', () => {
  const initialFunction = x => x;
  const doubledFunction = generateDoubleFunction(initialFunction);

  expect(doubledFunction(5))
    .toBe(10);
});

test(`Calling generateDoubleFunction result returns doubled result of the 
  initial function.`, () => {
  const initialFunction = x => x * 2 + 2 + x;
  const doubledFunction = generateDoubleFunction(initialFunction);

  expect(doubledFunction(5))
    .toBe(34);
});

test('Second call works for zero', () => {
  const initialFunction = x => 5 * x;
  const doubledFunction = generateDoubleFunction(initialFunction);

  expect(doubledFunction(0))
    .toBe(0);
});
