'use strict';

const generateDoubleFunction = require('./generateDoubleFunction');

test('First call returns function', () => {
  expect(generateDoubleFunction((x) => x))
    .toBeInstanceOf(Function);
});

test('Second call returns doubled value', () => {
  const initialFunction = x => x;
  const doubledFunction = generateDoubleFunction(initialFunction);

  expect(doubledFunction(5))
    .toBe(10);
});

test('Second call works for complex initial function', () => {
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
