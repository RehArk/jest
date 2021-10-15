// Add the unit tests of the sum function here
const obj = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(obj.sum(1, 2)).toBe(3);
});

test('a NAN value', () => {
  expect(obj.sum('test', 2)).toBe(false);
});

test('b NAN value', () => {
  expect(obj.sum(1, 'test')).toBe(false);
});

test('adds 5 * 5 to equal 2', () => {
  expect(obj.multiply(5, 5)).toBe(25);
});

test('a NAN value', () => {
  expect(obj.multiply('test', 2)).toBe(false);
});

test('b NAN value', () => {
  expect(obj.multiply(1, 'test')).toBe(false);
});