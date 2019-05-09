export default function cleanCountryId(dirtyId) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but ' + arguments.length + ' present'
    )
  }

  if (dirtyId === null || dirtyId === true || dirtyId === false) {
    return NaN
  }

  var countryId = String(dirtyId);

  return countryId.length == 2 ? countryId.toLowerCase() : NaN
}