const cleanCountryId = require('./index');

test('ensures the ID is in the same string format for Alpha2 codes', () => {
  expect(cleanCountryId('za')).toBe('ZA');
  expect(cleanCountryId('zA')).toBe('ZA');
  expect(cleanCountryId('Zaf')).toBe('ZAF');
  expect(cleanCountryId(null)).toBe(NaN);
  expect(cleanCountryId(true)).toBe(NaN);
  expect(cleanCountryId(false)).toBe(NaN);
  expect(cleanCountryId(1)).toBe('1');
  expect(cleanCountryId()).toThrow('1 argument required, but 0 present');
});
