const sqrt_recursive = (number, min_interval, max_interval) => {
  const mid = Math.floor((min_interval + max_interval )/ 2)
  if ((mid * mid) === number) {
    return mid;
  } else if (mid * mid > number) {
    return sqrt_recursive(number, min_interval, mid)
  } else if (mid * mid < number) {
    return sqrt_recursive(number, mid, max_interval)
  }
}

const sqrt = (number) => sqrt_recursive(number, 0, number);



console.log(sqrt(25));
// console.log(sqrt(7056));

module.exports = sqrt;

