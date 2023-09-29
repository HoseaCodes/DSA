
class Queue{
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
    }

    isFull() {
        return (this.tail - this.head) === this.maxSize
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(value) {
        if (this.isFull()) return false;
        this.queue[this.tail] = value;
        this.tail++;
        // return this.queue.unshift(value);
        return true;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const value = this.queue[this.head]
        this.head++;
        // return this.queue.shift();
        return value;
    }

    peek() {
        return console.log(this.queue[this.head]);
    }


    search(value) {
        return console.log(this.queue.indexOf(value));
    }

}

module.exports = {Queue}