# Linked List 

A linked list is a data structure that is similar to an array. It also stores data in an ordered manner, but it is implemented using node objects (you will have a custom class that defines the node object). Each node will have a "next" pointer, which points to the node representing the next element in the sequence.

```js
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

(function main() {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    one.next = two;
    two.next = three;
    let head = one;
    
    console.log(head)
    console.log(head.val);
    console.log(head.next.val);
    console.log(head.next.next.val);
}());

// Output
// ListNode {
//   val: 1,
//   next: ListNode { val: 2, next: ListNode { val: 3, next: null } }
// }
// 1
// 2
// 3
```

A few other notes that are less relevant for algorithm problems but may come up in an interview discussion - linked lists have the advantage of not having fixed sizes. While dynamic arrays can be resized, under the hood they still are allocated a fixed size - it's just that when this size is exceeded, the array is resized, which is expensive. Linked lists don't suffer from this. However, linked lists have more overhead than arrays - every element needs to have extra storage for the pointers. If you are only storing small items like booleans or characters, then you may be more than doubling the space needed.

### Chaining .next

If you have multiple .next, for example head.next.next, everything before the final .next refers to one node. For example, given a linked list 1 -> 2 -> 3, if you have head pointing at the first node, and you do head.next.next, you are actually referring to 2.next, because head.next is the 2. We'll soon see that this is a very useful technique.

### Traversal

Iterating forward through a linked list can be done with a simple loop. This is the usual code that you will use to do so: as an example let's get the sum of all values from an integer linked list:

```js
let getSum = head => {
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
    }

    return ans;
}
```

    The final node's next pointer is null. Therefore, after doing head = head.next at the final node, head becomes null and the while loop ends.

Moving to head.next is the equivalent of iterating to the next element in an array. Traversal can also be done recursively:

```js
let getSum = head => {
    if (!head) {
        return 0;
    }

    return head.val + getSum(head.next);
}
```

### Singly linked list

This is the most common type of linked list and the one that is given in the code above. In a singly linked list, each node only has a pointer to the next node. This means you can only move forward in the list when iterating. The pointer used to reference the next node is usually called next.

Let's say you want to add an element to a linked list so that it becomes the element at position i. To do this, you need to have a pointer to the element currently at position i - 1. The next element (currently at position i), call it x, will be pushed to the element at position i + 1 after the insertion. This means that x should become the next node to the one being added, and the node being added should become the next node to the one currently at i - 1. Here's some code and images demonstrating:

```js
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Let prevNode be the node at position i - 1
let addNode = (prevNode, nodeToAdd) => {
    nodeToAdd.next = prevNode.next;
    prevNode.next = nodeToAdd;
}
```

    Note: it is unusual that you will have a pointer to the node at the position before where you want to perform an operation, but we are writing these functions as a demonstration. Typically you will be doing these operations on the fly, as you iterate through the list. If you don't have a pointer to the desired position at all, you will need to iterate from the head until you are at the desired position, which means the operation would be O(n). If you have the pointer already, it's O(1).

Let's say you want to delete the element at position i. Again, you need to have a pointer to the element currently at position i - 1. The element at position i + 1, call it x, will be shifted over to be at position i after the deletion. Therefore, you should set x as the next node to the element currently at position i - 1. Here's some code and images demonstrating:

```js
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Let prevNode be the node at position i - 1
let deleteNode = prevNode => {
    prevNode.next = prevNode.next.next;
}
```

    prevNode.next is the node being deleted. prevNode.next.next is the node after that which should be kept. We change the next pointer of prevNode to point at that node instead of the one being deleted.

    Because the node being deleted could only have been reached from prevNode and we have now severed that connection, it is no longer part of the list.

As mentioned before, when you have a reference to the node at i - 1, then insertion and deletion is 
O(1). However, without that reference, you need to obtain the reference by iterating from the head, which for an arbitrary position is O(n).

### Doubly linked list

A doubly linked list is like a singly linked list, but each node also contains a pointer to the previous node. This pointer is usually called prev, and it allows iteration in both directions.

In a singly linked list, we needed a reference to the node at i - 1 if we wanted to add or remove at i. This is because we needed to perform operations on the prevNode. With a doubly linked list, we only need a reference to the node at i. This is because we can simply reference the prev pointer of that node to get the node at i - 1, and then do the exact same operations as above.

With a doubly linked list, we need to do extra work to make also update the prev pointers.

```js
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

let addNode = (node, nodeToAdd) => {
    let prevNode = node.prev;
    nodeToAdd.next = node;
    nodeToAdd.prev = prevNode;
    prevNode.next = nodeToAdd;
    node.prev = nodeToAdd;
}

let deleteNode = node => {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
}
```

```js
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

(function main() {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    let head = one;
    let tail = three;
    one.next = two;
    two.next = three;
    three.prev = two;
    two.prev = one;
    console.log(head)
    console.log(head.next)
    console.log(head.next.next)
    console.log(tail)
    console.log(tail.prev)
    console.log(tail.prev.prev)

    // Write your code here
    // Try creating 1 <-> 2 <-> 3
    // Test with console.log()
}());
```

#### Linked lists with sentinel nodes


    We call the start of a linked list the head and the end of a linked list the tail.

Sentinel nodes sit at the start and end of linked lists and are used to make operations and the code needed to execute those operations cleaner. The idea is that, even when there are no nodes in a linked list, you still keep pointers to a head and tail. The real head of the linked list is head.next and the real tail is tail.prev. The sentinel nodes themselves are not part of our linked list.

    The previous code we looked at is prone to errors. For example, if we are trying to delete the last node in the list, then nextNode will be null, and trying to access nextNode.next would result in an error. With sentinel nodes, we don't need to worry about this scenario because the last node's next points to the sentinel tail.

The sentinel nodes also allow us to easily add and remove from the front or back of the linked list. Recall that addition and removal is only O(1) if we have a reference to the node at the position we are performing the operation on. With the sentinel tail node, we can perform operations at the end of the list in O(1).

```js
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

let addToEnd = nodeToAdd => {
    nodeToAdd.next = tail;
    nodeToAdd.prev = tail.prev;
    tail.prev.next = nodeToAdd;
    tail.prev = nodeToAdd;
}

let removeFromEnd = () => {
    if (head.next == tail) {
        return;
    }

    let nodeToRemove = tail.prev;
    nodeToRemove.prev.next = tail;
    tail.prev = nodeToRemove.prev;
}

let addToStart = nodeToAdd => {
    nodeToAdd.prev = head;
    nodeToAdd.next = head.next;
    head.next.prev = nodeToAdd;
    head.next = nodeToAdd;
}

let removeFromStart = () => {
    if (head.next == tail) {
        return;
    }

    let nodeToRemove = head.next;
    nodeToRemove.next.prev = head;
    head.next = nodeToRemove.next;
}

let head = new ListNode(-1);
let tail = new ListNode(-1);
head.next = tail;
tail.prev = head;
```

#### Dummy pointers

As mentioned earlier, we usually want to keep a reference to the head to ensure we can always access any element. Sometimes, it's better to traverse using a "dummy" pointer and to keep head at the head.

```js
let getSum = head => {
    let ans = 0;
    let dummy = head;
    while (dummy) {
        ans += dummy.val;
        dummy = dummy.next;
    }
    // same as before, but we still have a pointer at the head
    return ans;
}
```
Using the dummy pointer allows us to traverse the linked list without losing a reference to the head.


