const subdivisionsFor = require('../lib/subdivisions');
const allCountriesList = require('../allCountriesList');

const alpha3ToAlpha2 = (alpha3) => {
  const countries = allCountriesList('alpha2', 'alpha3');
  const country = countries.find(c => c.alpha3 === alpha3);
  if (country !== undefined) {
    return country.alpha2;
  }

  return alpha3;
};

const getEffectiveCountryId = (countryId) => {
  if (countryId === undefined) return 'US';

  const upperCaseCountryId = countryId.toUpperCase();
  if (upperCaseCountryId.length === 3) {
    return alpha3ToAlpha2(upperCaseCountryId);
  }

  return upperCaseCountryId;
};

/**
 * @name getSubdivisionsList
 * @category Country Helpers
 * @summary Returns an object with subdivision information.
 */

const getSubdivisionsList = (countryId, locale) => {
  const effectiveCountryId = getEffectiveCountryId(countryId); countryId === undefined ? 'US' : countryId.toUpperCase();
  const effectiveLocale = locale === undefined ? 'en' : locale;

  const subdivisions = subdivisionsFor(effectiveCountryId);
  if (subdivisions === undefined) {
    return [];
  }

  return Object.values(subdivisions).map((subdivision) => {
    const { translations } = subdivision;
    if (translations[effectiveLocale] !== undefined) {
      return translations[effectiveLocale];
    }

    return Object.values(translations)[0];
  });
};

module.exports = getSubdivisionsList;
