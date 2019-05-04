const getAlpha3 = require('./index');

test('returns the alpha3 code from country name', () => {
  expect(getAlpha3('South Africa')).toBe(['ZAF']);
});

test('returns the alpha3 code from the Alpha2 code', () => {
  expect(getAlpha3('ZA')).toBe(['ZAF']);
});