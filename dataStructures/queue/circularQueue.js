import ListNode from "../nodes/listNode";

/**
 * class based minus Node
 */

class MyCircularQueue {
    constructor(size) {
        this.storage = [];
        this.size = 0;
        this.maxSize = size;
        this.head = null;
        this.tail = null;
    }

    Front() {
        if (this.size === 0 || this.head === null) return -1;
        return this.storage[this.head];
    }

    Rear() {
        if (this.size === 0 || this.tail === null) return -1;
        return this.storage[this.tail];
    }

    enQueue(value) {
        if (this.size === this.maxSize) return false;
        if (this.head === null && this.tail === null) {
            this.storage.push(value);
            this.head = 0;
            this.tail = 0;
            this.size++;
            return true;
        } else if (this.tail === this.maxSize) {
            this.storage.push(value);
            this.tail = 0;
            this.size++;
            return true;
        } else {
            this.storage.push(value);
            this.tail = this.tail + 1;
            this.size++;
            return true;
        }
    }
    // Head: 0
    // [1,2,3]
    // Head: 1
    // [ ,2,3]
    deQueue() {
        if (this.size === 0) return false;
        if (this.head === this.maxSize) {
            this.storage.shift();
            this.head = 0;
            this.size--;
            return true;
        } else if (this.head === this.tail) {
            this.storage.shift();
            this.head = null;
            this.tail = null;
            this.size--;
            return true;
        } else {
            this.storage.shift();
            this.head++;
            this.size--;
            return true;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.maxSize;
    }
}

var obj = new MyCircularQueue(5)
console.log(obj)
console.log(obj.isEmpty())
obj.enQueue(1)
console.log(obj.Front())
console.log(obj.Rear())
obj.enQueue(2)
console.log(obj.Rear())
obj.enQueue(3)
console.log(obj.Rear())
console.log(obj)
obj.deQueue()
console.log(obj)
console.log(obj.Front())
obj.enQueue(4)
obj.enQueue(5)
obj.enQueue(6)
console.log(obj)
console.log(obj.isFull())
console.log(obj.enQueue(6))
console.log(obj)




/**
 * @param {number} k
 * Alternative Approach with prototypes
 */
var PrototypeCircularQueue = function(k) {
    this.queue =[]; // Initializing a queue
    this.size = k; // with the provided size.
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
     // Enqueue means adding the element in the queue.
    if(this.size === this.queue.length) return false; 
    // its the case when queue is full, implies we cant add more elements in it.
    this.queue.push(value); // if not full then add the element 
    return true; // and return true as the operation is performed.
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.queue.length === 0) return false; // its the case when queue is empty, implies we cant take out any more elements in it.
    this.queue.shift(); // if not empty then take out element from front.
    return true; // and return true as the operation is performed.
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.queue.length) return this.queue[0]; // if we have something in queue then return the front element.
    else return -1; // if we dont have anything in the queue.
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.queue.length) return this.queue[this.queue.length-1]; // if we have something in queue then return the last element.
    else return -1;  // if we dont have anything in the queue.
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0; // its the case when we dont have anything in the queue.
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.queue.length === this.size; // its the case when the queue is full.
};