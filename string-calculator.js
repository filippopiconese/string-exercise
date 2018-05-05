module.exports = function add (stringWithNumbers) {
  let total = 0

  if (!stringWithNumbers) {
    return total
  }

  const numbers = stringWithNumbers.split(',')

  numbers.forEach(number => {
    total = total + parseInt(number)
  })

  return total
}
