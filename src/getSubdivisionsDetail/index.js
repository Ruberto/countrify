import cleanCountryId from '../_lib/cleanCountryId/index.js'
import cleanLocale from '../_lib/cleanLocale/index.js'

/**
 * @name getSubdivisionsDetail
 * @category Country Helpers
 * @summary Returns an object with subdivision information.
 *
 * @param {String} countryName - the date to be changed
 * @param {string} locale - the amount of days to be added
 * @returns {Object} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = getSubdivisionsDetail()
 * //=> Thu Sep 11 2014 00:00:00
 */

export default function getSubdivisionsDetail(dirtyCountryId, dirtyLocale) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var countryId = cleanCountryId(dirtyCountryId)
  var locale = cleanLocale(dirtyLocale)
}