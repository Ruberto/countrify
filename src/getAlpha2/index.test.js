const getAlpha2 = require('./index');

test('returns the alpha2 code from country name', () => {
  expect(getAlpha2('South Africa')).toBe(['ZA']);
});

test('returns the alpha2 code from the Alpha3 code', () => {
  expect(getAlpha2('ZAF')).toBe(['ZA']);
});