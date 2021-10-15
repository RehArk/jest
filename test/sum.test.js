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



test('romain number 400', () => {
  expect(obj.romainNumber(4)).toBe('IV');
});

test('romain number 3000', () => {
  expect(obj.romainNumber(3000)).toBe('MMM');
});

test('romain number 2500', () => {
  expect(obj.romainNumber(2500)).toBe('MMD');
});

test('romain number 100', () => {
  expect(obj.romainNumber(100)).toBe('C');
});

test('romain number 50', () => {
  expect(obj.romainNumber(50)).toBe('L');
});

test('romain number 20', () => {
  expect(obj.romainNumber(20)).toBe('XX');
});

test('romain number 5', () => {
  expect(obj.romainNumber(5)).toBe('V');
});

test('romain number 3', () => {
  expect(obj.romainNumber(3)).toBe('III');
});

test('romain number 2859', () => {
  expect(obj.romainNumber(2859)).toBe('MMDCCCLIX');
});

test('romain number 9', () => {
  expect(obj.romainNumber(9)).toBe('IX');
});

test('romain number 1995', () => {
  expect(obj.romainNumber(1995)).toBe('MCMXCV');
});

test('romain number 853', () => {
  expect(obj.romainNumber(853)).toBe('DCCCLIII');
});

test('romain number 400', () => {
  expect(obj.romainNumber(400)).toBe('CD');
});

test('romain number 123', () => {
  expect(obj.romainNumber(123)).toBe('CXXIII');
});

test('romain number 1', () => {
  expect(obj.romainNumber(1)).toBe('I');
});