const fs = require('fs');
const path = require('path');

const extractPropertiesFrom = (object, properties) => {
  if (properties.length === 1) {
    return object[properties[0]];
  }

  const result = {};

  properties.forEach((p) => {
    result[p] = object[p];
  });

  return result;
};

const allCountries = (...attributes) => {
  const countriesPath = path.join(__dirname, '../../data/countries');
  const countryFiles = fs.readdirSync(countriesPath);

  return countryFiles.map((fileName) => {
    const rawData = fs.readFileSync(`${countriesPath}/${fileName}`);
    const parsedCountryData = JSON.parse(rawData.toString('utf8'));

    const countryData = Object.values(parsedCountryData)[0];
    if (attributes.length === 0) {
      return countryData;
    }

    return extractPropertiesFrom(countryData, attributes);
  });
};

module.exports = allCountries;
