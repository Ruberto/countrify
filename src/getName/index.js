const allCountries = require('../lib/countries');

/**
 * @name getName
 * @category Country Helpers
 * @summary Returns all the countries as an array of strings.
 */
const getName = (search) => {
  const countries = allCountries();
  const found = countries.find(country => country.alpha3 === search || country.alpha2 === search);

  if (found !== undefined) {
    return found.name;
  }

  return undefined;
};

module.exports = getName;
