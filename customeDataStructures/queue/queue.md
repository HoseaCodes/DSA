# Queue

In a queue, elements are added and removed from opposite sides. Like with a stack, there are multiple ways to implement a queue, but the important thing that defines it is the abstract interface of adding and removing from opposite sides.

Horizontal structure 
FIFO - First in First Out
Use of unshift and shift

Queues are trickier to implement than stacks if you want to maintain good performance. Like a stack, you could just use a dynamic array, but operations on the front of the array (adding or removal) are O(n), where n is the size of the array. Adding to a queue is called enqueue and deletions are called dequeue. If you want these operations to be O(1), you'll need a more sophisticated implementation.

One way to implement an efficient queue is by using a doubly linked list. Recall that with a doubly linked list, if you have the pointer to a node, you can add or delete at that location in O(1). A doubly linked list that maintains pointers to the head and tail (both ends, usually with sentinel nodes) can implement an efficient queue.
## 5 Methods

- Enqueue
- Dequeue
- Peek - Returns the head of the queue. Returns null if the queue is empty.
- Empty
- Size 
- Contains


## Exceptions

## When is it used:

- Event Loop in the broswer (task queue)
- Line of people
- Keyboard buffer
- Printer queues 
- Linkedlist, priority queues, breath first search


```js
// JavaScript doesn't have any built-in efficient queue
// We'll just have to use a normal array
let queue = [];

// If you want to initialize it with some initial values:
let queue = [1, 2, 3];

// Enqueueing/adding elements:
queue.push(4);
queue.push(5);

// Dequeuing/removing elements:
queue.shift(); // 1
queue.shift(); // 2

// Check element at front of queue (next element to be removed)
queue[0]; // 3

// Get size
queue.length; // 3
```