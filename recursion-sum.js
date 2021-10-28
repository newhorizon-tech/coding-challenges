const sum = (number) => {
  if (number == 1) {
    return 1
  }

  return number + sum(number - 1)
}

console.log(sum(4))
console.log(sum(10))

module.exports = sum;
