module.exports = function add (stringWithNumbers) {
  let total = 0

  if (!stringWithNumbers) {
    return total
  }

  const stringWithCommas = stringWithNumbers.replace('\n', ',')
  const numbers = stringWithCommas.split(',')

  numbers.forEach(number => {
    total = total + parseInt(number)
  })

  return total
}
