const toTitleCase = require('./index');

test('Ensures the name of the country is in the expected format', () => {
  expect(toTitleCase('sOuTh AfrIca')).toBe('South Africa');
  expect(toTitleCase('aMERICa')).toBe('America');
  expect(toTitleCase('aMERICa')).toBe('America');
  expect(toTitleCase(1)).toBe('1');
  expect(toTitleCase(null)).toBe(NaN);
  expect(toTitleCase(true)).toBe(NaN);
  expect(toTitleCase(false)).toBe(NaN);
  expect(toTitleCase()).toThrow(['1 argument required, but 0 present']);
});