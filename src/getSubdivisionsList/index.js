import cleanCountryId from '../_lib/cleanCountryId/index.js'
import cleanLocale from '../_lib/cleanLocale/index.js'

/**
 * @name getSubdivisionsList
 * @category Country Helpers
 * @summary Returns an object with subdivision information.
 *
 * @param {String} countryName - the date to be changed
 * @param {string} locale - the amount of days to be added
 * @returns {Array} an array of the subdivision names in the locale of your choice
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Get all subdivision names for South Africa('ZA'), in english('en'):
 * var result = getSubdivisionsList('ZA', 'en');
 * //=> ['Eastern Cape', 'Free State', 'Gauteng', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'KwaZulu-Natal', 'North West', 'Western Cape']
 */

export default function getSubdivisionsList(dirtyCountryId, dirtyLocale) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var countryId = cleanCountryId(dirtyCountryId)
  var locale = cleanLocale(dirtyLocale)
}