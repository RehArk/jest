// Add the unit tests of the sum function here
const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('a NAN value', () => {
  expect(sum('test', 2)).toBe(false);
});

test('b NAN value', () => {
  expect(sum(1, 'test')).toBe(false);
});