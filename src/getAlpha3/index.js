const allCountries = require('../lib/countries');

/**
 * @name getAlpha3
 * @category Country Helpers
 * @summary Returns all the countries as an array of strings.
 */
const getAlpha3 = (search) => {
  const countries = allCountries();
  const found = countries.find(country => country.name === search || country.alpha2 === search);

  if (found !== undefined) {
    return found.alpha3;
  }

  return undefined;
};

module.exports = getAlpha3;
