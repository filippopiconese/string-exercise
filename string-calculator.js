module.exports = function add (stringWithNumbers) {
  let total = 0
  let delimiter = ','
  let stringWithNumbersCopies = stringWithNumbers

  if (!stringWithNumbers) {
    return total
  }

  if (stringWithNumbers[0] === '/' && stringWithNumbers[1] === '/') {
    delimiter = stringWithNumbers[2]

    stringWithNumbersCopies = stringWithNumbers.slice(4)
  }

  const stringWithCommas = stringWithNumbersCopies.replace('\n', delimiter)
  const numbers = stringWithCommas.split(delimiter)

  numbers.forEach(number => {
    total = total + parseInt(number)
  })

  return total
}
