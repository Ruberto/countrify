const getName = require('./index');

test('returns the country name from the alpha3 code', () => {
  expect(getName('ZAF')).toBe(['South Africa']);
});

test('returns the country name from the Alpha2 code', () => {
  expect(getName('ZA')).toBe(['South Africa']);
});