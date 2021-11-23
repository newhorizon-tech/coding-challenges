class Stack {
  constructor() {
    this.mainStack = [];
  }

  push(number) {
    if (number) {
    this.mainStack = [...this.mainStack, number];
    }
  }

  pop() {
    const length = this.mainStack.length;
    const number = this.mainStack[length-1];
    this.mainStack = this.mainStack.slice(0,length-1);
    return number;
  }

  min() {
    return Math.min(...this.mainStack);
  }


}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()

console.log(stack.min())
// => 3

module.exports = Stack

