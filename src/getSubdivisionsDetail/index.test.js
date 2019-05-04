const getSubdivisionDetail = require('./index');

test('returns the subDivisions using the alpha3 code', () => {
  expect(getSubdivisionDetail('ZAF')).toBe(['EC',
                                       'FS',
                                       'GT',
                                       'LP',
                                       'MP',
                                       'NC',
                                       'NL',
                                       'NW',
                                       'WC']);
});

test('returns the subDivisions using the Alpha2 code', () => {
  expect(getSubdivisionDetail('ZA')).toBe(['EC',
                                      'FS',
                                      'GT',
                                      'LP',
                                      'MP',
                                      'NC',
                                      'NL',
                                      'NW',
                                      'WC']);
});