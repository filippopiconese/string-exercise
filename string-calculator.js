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
  let negativeNumbers = []

  numbers.forEach((number, index) => {
    if (delimiter !== '-' && number.includes('-')) {
      negativeNumbers.push(parseInt(number))
      // throw new Error(`negatives not allowed: ${number}`)
    }

    if (delimiter === '-' && !number) { // we are in this situation -> b = 1-2-3--4 => 1,2,3,,4 => negatives not allowed -4
      negativeNumbers.push(parseInt(-(numbers[index + 1])))
      // throw new Error(`negatives not allowed: -${numbers[index + 1]}`)
    }

    total = total + parseInt(number)
  })

  if (negativeNumbers.length !== 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers}`)
  }

  return total
}
