const fs = require('fs');
const path = require('path');

const subdivisionsFor = (countryCode) => {
  const rawData = fs.readFileSync(path.join(__dirname, `../../data/subdivisions/${countryCode}.json`));
  return JSON.parse(rawData.toString('utf8'));
};

module.exports = subdivisionsFor;
