const getName = require('../index');

describe('.getName', () => {
  it('returns the country name from the alpha3 code', () => {
    expect(getName('ZAF')).toBe('South Africa');
  });

  it('returns the country name from the Alpha2 code', () => {
    expect(getName('ZA')).toBe('South Africa');
  });
});
