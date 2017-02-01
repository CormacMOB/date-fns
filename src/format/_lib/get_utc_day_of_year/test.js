// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var getUTCDayOfYear = require('./')

describe('getUTCDayOfYear', function () {
  it('returns the day of the year of the given date', function () {
    var result = getUTCDayOfYear(new Date(Date.UTC(2014, 6 /* Jul */, 2)))
    assert(result === 183)
  })

  it('accepts a string', function () {
    var result = getUTCDayOfYear(new Date(Date.UTC(2014, 0 /* Jan */, 2)).toISOString())
    assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = getUTCDayOfYear(new Date(Date.UTC(2014, 0 /* Jan */, 2)).getTime())
    assert(result === 2)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(0, 11 /* Dec */, 31)
    initialDate.setUTCHours(0, 0, 0, 0)
    var result = getUTCDayOfYear(initialDate)
    assert(result === 366)
  })
})
