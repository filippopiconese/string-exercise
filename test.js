const test = require('ava')

const stringCalculator = require('./string-calculator')

test('Empty string return 0', t => {
  t.is(stringCalculator(''), 0, `The string is not empty but return ${stringCalculator('')}`)
})

test('String with value return the input value', t => {
  t.is(stringCalculator('1'), 1, `The string return ${stringCalculator('1')} instead of 1`)
})

test('String with two values return the input values', t => {
  t.is(stringCalculator('1,2'), 3, `The string return ${stringCalculator('1,2')} instead of 3`)
})
