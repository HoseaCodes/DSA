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