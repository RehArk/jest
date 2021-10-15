const obj = require('../src/romainNumber');

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