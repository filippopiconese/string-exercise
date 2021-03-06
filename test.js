const test = require('ava')

const stringCalculator = require('./string-calculator')

test('Empty string return 0', t => {
  t.is(stringCalculator(''), 0, `The string is not empty but return ${stringCalculator('')}`)
})

test('String with 1 value return the input value', t => {
  t.is(stringCalculator('1'), 1, `The string return ${stringCalculator('1')} instead of 1`)
})

test('String with 2 values return the input values', t => {
  t.is(stringCalculator('1,2'), 3, `The string return ${stringCalculator('1,2')} instead of 3`)
})

test('Handle an unknown amount of numbers', t => {
  t.is(stringCalculator('1,2,3,4,5,6,7,8'), 36, `The string return ${stringCalculator('1,2,3,4,5,6,7,8')} instead of 36`)
})

test('handle new lines between numbers', t => {
  t.is(stringCalculator('1\n2,3'), 6, `The string return ${stringCalculator('1\n2,3')} instead of 6`)
})

test('handle new lines between numbers - should not work', t => {
  t.is(stringCalculator('1,\n'), NaN, `The string return ${stringCalculator('1,\n')} instead of NaN`)
})

test('support different delimiters n. 1', t => {
  t.is(stringCalculator('//;\n1;2'), 3, `The string return ${stringCalculator('//;\n1;2')} instead of 3`)
})

test('support different delimiters n. 2', t => {
  t.is(stringCalculator('//-\n1-2-5\n7-9'), 24, `The string return ${stringCalculator('//-\n1-2-5\n7-9')} instead of 24`)
})

test('negative numbers are not allowed n. 1', t => {
  const errorMessage = t.throws(() => { stringCalculator('1,4,-1') })
  t.true(errorMessage.message === 'negatives not allowed: -1')
})

test('negative numbers are not allowed n. 2', t => {
  const errorMessage = t.throws(() => { stringCalculator('//-\n1-4-1--6--5') })
  t.true(errorMessage.message === 'negatives not allowed: -6,-5')
})

test('numbers bigger than 1000 should be ignored n. 1', t => {
  t.is(stringCalculator('//-\n1000-2-5\n1111-9'), 16, `The string return ${stringCalculator('//-\n1000-2-5\n1111-9')} instead of 16`)
})

test('negative numbers are not allowed n. 2', t => {
  const errorMessage = t.throws(() => { stringCalculator('//-\n1-4--1001-6-5') })
  t.true(errorMessage.message === 'negatives not allowed: -1001')
})

test('numbers bigger than 1000 should be ignored n. 1', t => {
  t.is(stringCalculator('1000,1100'), 0, `The string return ${stringCalculator('1000,1100')} instead of 0`)
})
