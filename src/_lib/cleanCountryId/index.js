import toTitleCase from '../toTitleCase/index.js'

export default function cleanCountryId(dirtyId) {
  if (dirtyId === null || dirtyId === true || dirtyId === false) {
    return NaN
  }

  var countryId = String(dirtyId);

  return countryId <= 3 ? countryId.toUpperCase() : countryId.toTitleCase()
}