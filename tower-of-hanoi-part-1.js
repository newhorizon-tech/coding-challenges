function printMove(a,b) {
  return `${a}->${b} `
}

function move(starting, goal) {
  const values = [1,2,3]
  const input = [starting,goal];
  const intermediate = values.filter(num => !input.includes(num)); 

  let result = printMove(starting,intermediate);
  result += printMove(starting, goal);
  result += printMove(intermediate, goal);

  result = result.trim();
  return result;
}

console.log(move(1, 3))
// => 1->2 1->3 2->3

console.log(move(2, 3))
// => 2->1 2->3 1->3

module.exports = move;
