function printMove(a,b) {
  return `${a}->${b}\n`
}

function move(starting, goal) {
  const values = [1,2,3]
  const input = [starting,goal];
  const intermediate = values.filter(num => !input.includes(num))

  let result = printMove(starting,intermediate);
  result += printMove(starting, goal);
  result += printMove(intermediate, goal);

  result = result.trim();
  return result;
}

const move_discs = (n,start, intermediate, goal)


function hanoi_steps(numberOfDiscs) {
  move_discs(numberOfDiscs, 1,2,3)
  // write your code here
}


console.log(hanoi_steps(2))
// => 1->2
//    1->3
//    2->3

console.log(hanoi_steps(3))
// => 1->3
//    1->2
//    3->2
//    1->3
//    2->1
//    2->3
//    1->3

console.log(hanoi_steps(4))
// => 1->2
//    1->3
//    2->3
//    1->2
//    3->1
//    3->2
//    1->2
//    1->3
//    2->3
//    2->1
//    3->1
//    2->3
//    1->2
//    1->3
//    2->3



module.exports = hanoi_steps;
