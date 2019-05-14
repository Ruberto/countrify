const allCountries = require('../lib/countries');

/**
 * @name getAlpha2
 * @category Country Helpers
 * @summary Returns all the countries as an array of strings.
 */
const getAlpha2 = (search) => {
  const countries = allCountries();
  const found = countries.find(country => country.name === search || country.alpha3 === search);

  if (found !== undefined) {
    return found.alpha2;
  }

  return undefined;
};

module.exports = getAlpha2;
