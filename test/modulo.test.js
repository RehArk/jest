const obj = require('../src/modulo');

test('modulo enter 1', () => {
  expect(obj.modulo(1)).toBe(1);
});

test('modulo enter 2', () => {
  expect(obj.modulo(2)).toBe(2);
});

test('modulo enter 3', () => {
  expect(obj.modulo(3)).toBe('Fizz');
});

test('modulo enter 4', () => {
  expect(obj.modulo(4)).toBe(4);
});

test('modulo enter 5', () => {
  expect(obj.modulo(5)).toBe('Buzz');
});

test('modulo enter 6', () => {
  expect(obj.modulo(6)).toBe('Fizz');
});

test('modulo enter 7', () => {
  expect(obj.modulo(7)).toBe(7);
});

test('modulo enter 8', () => {
  expect(obj.modulo(8)).toBe(8);
});

test('modulo enter 9', () => {
  expect(obj.modulo(9)).toBe('Fizz');
});

test('modulo enter 10', () => {
  expect(obj.modulo(10)).toBe('Buzz');
});

test('modulo enter 11', () => {
  expect(obj.modulo(11)).toBe(11);
});

test('modulo enter 12', () => {
  expect(obj.modulo(12)).toBe('Fizz');
});

test('modulo enter 13', () => {
  expect(obj.modulo(13)).toBe(13);
});

test('modulo enter 14', () => {
  expect(obj.modulo(14)).toBe(14);
});

test('modulo enter 15', () => {
  expect(obj.modulo(15)).toBe('FizzBuzz');
});

test('modulo enter 16', () => {
  expect(obj.modulo(16)).toBe(16);
});

test('modulo enter 17', () => {
  expect(obj.modulo(17)).toBe(17);
});