/*
LIFO - Last In First Out

Push - add to the top of the stack. 
Pop - remove from the top of the stack. 
Peek - display the first element of a stack.
Size - how many elements are in a stack. 

stack = []
stack.push(1)
stack.peek() // returns 1
stack.push(2)
stack.peek() // returns 2
stack.push(3)
stack.peek() // returns 3
stack.pop() // removes and return 3, now [1,2] is left on the stack.
*/

class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
        this.maxSize = 100;
    }
    
    isFull() {
        return this.top === this.maxSize - 1;
    }
    
    isEmpty() {
        return this.top == -1;
    }
    
    add(value) {
        if (this.isFull()) {
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        return true;
    }
    
    remove() {
        if (this.isEmpty()) {
            return null;
        }
        this.top--;
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack[this.top];
    }


    search(value) {
        return this.stack.indexOf(value);
    }

}

module.exports = {Stack}

const stack = new Stack();
stack.isEmpty();
stack.add(1)
stack.add(2)
console.log(stack.peek())
stack.add(3)
stack.add(4)
stack.remove()
stack.add(5)
console.log(stack)
console.log(stack.peek())
console.log(stack.search(3))