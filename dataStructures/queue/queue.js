/*
FIFO - First In First Out

enqueue - add to the back of the queue. 
dequeue - remove from the front of the queue. 
isEmpty - checks if queue is empty.
Size - how many elements are in a queue. 

[]
[1]
[1,2]
[1,2,3]
[1,2,3,4]
[2,3,4]
[2,3,4,5]
[3,4,5,6]

queue = []
queue.enqueue(1)
[1]
queue.front() // returns 1
queue.enqueue(2)
[1,2]
queue.front() // returns 1
queue.enqueue(3)
[1,2,3]
queue.dequeue()
[2,3]
queue.front() // returns 2
*/

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
        // return this.queue.push(value);
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