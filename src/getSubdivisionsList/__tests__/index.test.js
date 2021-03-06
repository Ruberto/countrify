const getSubdivisionList = require('../index');

test('returns the subDivisions using the alpha3 code', () => {
  expect(getSubdivisionList('ZAF', 'en')).toEqual(['Eastern Cape',
    'Free State',
    'Gauteng',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'KwaZulu-Natal',
    'North West',
    'Western Cape']);
});

test('returns the subDivisions using the Alpha2 code', () => {
  expect(getSubdivisionList('ZA', 'en')).toEqual(['Eastern Cape',
    'Free State',
    'Gauteng',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'KwaZulu-Natal',
    'North West',
    'Western Cape']);
});
