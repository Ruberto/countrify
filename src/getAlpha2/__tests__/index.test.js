const getAlpha2 = require('../index');

describe('getAlpha2', () => {
  it('returns the alpha2 code from country name', () => {
    expect(getAlpha2('South Africa')).toBe('ZA');
  });

  it('returns the alpha2 code from the Alpha3 code', () => {
    expect(getAlpha2('ZAF')).toBe('ZA');
  });
});
