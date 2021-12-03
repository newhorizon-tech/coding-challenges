function printMove(a,b) {
  return `${a}->${b} `
}

function move(starting, goal) {
  const pegs = [1,2,3];
  const intermediate = pegs.filter(x=> (x !== starting) && (x!== goal))[0];

  const moves = printMove(starting,intermediate) +
                printMove(starting,goal) +
                printMove(intermediate, goal);
  return moves.trim()
}

console.log(move(1, 3))
// => 1->2 1->3 2->3

console.log(move(2, 3))
// => 2->1 2->3 1->3

module.exports = move;
