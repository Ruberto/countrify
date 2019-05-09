const cleanLocale = require('./index');

test('ensures the ID is in the same string format for Alpha2 codes', () => {
  expect(cleanLocale('en')).toBe('en');
  expect(cleanLocale('En')).toBe('en');
  expect(cleanLocale('english')).toBe(NaN);
  expect(cleanLocale(null)).toBe(NaN);
  expect(cleanLocale(true)).toBe(NaN);
  expect(cleanLocale(false)).toBe(NaN);
  expect(cleanLocale(1)).toBe('1');
  expect(cleanLocale()).toThrow('1 argument required, but 0 present');
});
