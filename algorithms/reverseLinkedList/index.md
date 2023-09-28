# Reversing a linked list

Imagine that we have a linked list 1 -> 2 -> 3 -> 4, and we want to return 4 -> 3 -> 2 -> 1. Let's say we keep a pointer curr that represents the current node we are at. Starting with curr at the 1, we need to get the 2 to point to curr. The problem is, once we iterate (curr = curr.next) to get to the 2, we no longer have a pointer to the 1 because it is a singly linked list. To get around this, we can use another pointer prev that tracks the previous node.

At any given node curr, we can set curr.next = prev to switch the direction of the arrow. Then, we can update prev to be curr in preparation for the next node. However, if we change curr.next, we will lose that next node. To fix this, we can use a temporary variable nextNode to point to the next node before changing any of the other pointers.

```js
let reverseList = head => {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextNode = curr.next; // first, make sure we don't lose the next node
        curr.next = prev;         // reverse the direction of the pointer
        prev = curr;              // set the current node to prev for the next node
        curr = nextNode;          // move on
    }

    return prev;
}
```

The time complexity of this algorithm is O(n) where n is the number of nodes in the linked list. The while loop runs n times, and the work done at each iteration is O(1). The space complexity is 
O(1) as we are only using a few pointers.

This exercise is a great one to practice operations on a linked list because it demonstrates the thought process needed. Solutions to linked list problems are usually simple and elegant - to get to them, think about what you need, and solve the problem one step at a time. In this example, we had the following thought process:

When we are at a node curr, we need to set its next pointer to the node we were at previously.
Use a prev pointer to track the previous node.
The prev pointer needs to also update every iteration.
After updating curr.next, set prev = curr in preparation for the next node.
If we set curr.next = prev, then we lose the reference to the original curr.next.
Use nextNode to keep a reference to the original curr.next.

## Examples

#### Swap Nodes in Pairs

Given the head of a linked list, swap every pair of nodes. For example, given a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6, return a linked list 2 -> 1 -> 4 -> 3 -> 6 -> 5.

Again, let's break down what we need to do step by step, and how we can accomplish it. Consider the first pair of nodes as A -> B.

1. Starting with head at node A, we need node B to point here.
    - We can accomplish this by doing head.next.next = head
1. However, if we change B.next, we will lose access to the rest of the list.
    - Before applying the change in step 1, save a pointer nextNode = head.next.next.

    head.next.next is used differently in steps 1 and 2. When it is before the assignment operator (=), it is changing head.next's next node. When it is after the assignment, it is referring to head.next's next node.

1. We now have B pointing at A. We need to move on to the next pair C, D. However, A is still pointing at B, which isn't what we want. If we move on to the next pair immediately, we will lose a reference to A, and won't be able to change A.next.
    - Save A in another pointer with prev = head (we haven't changed head yet so it's still pointing at A).
    - To move to the next pair, do head = nextNode.
1. Once we move on to the next pair C -> D, we need A to point to D.
    - Now that head is at C, and prev is at A, we can do prev.next = head.next.
1. The first pair A, B is fully completed. B points to A and A points to D. When we started, we had head pointing to A. After going through steps 1 - 4, we completed A, B. Right now, we have head pointing to C. If we go through the steps again, we will have complete C, D, and be ready for the next pair. We can just repeat steps 1 - 4 until all pairs are swapped. But what do we return at the end?
    - Once all the pairs are finished, we need to return B. Unfortunately, we lost the reference to B a long time ago.
    - We can fix this by saving B in a dummy node before starting the algorithm.
1. What if there is an odd number of nodes? In step 4, we set A.next to C.next. What if there were only 3 nodes, so C.next was null?
    - Before moving on to the next pair, set head.next = nextNode. This is setting A.next to C.
    - Note that this effect will be overridden by step 4 in the next swap if there is still a pair of nodes remaining.
    - Since in step 2 we do head.next.next, we need our while loop condition to check for both head and head.next. That means if there is only one node left in the list, the while loop will end after the current iteration. As such, this effect wouldn't be overridden.
    - For example, consider the list A -> B -> C -> D. At some point, we have B <-> A C -> D. Here, we perform step 6, and we get B -> A -> C -> D. When we start swapping the pair C, D, step 4 will set A.next to D, which overrides what we just did with step 6. But if D didn't exist, then the iteration would have just ended. In that scenario, we would have B -> A -> C, which is what we want.

To summarize the steps:

1. Performs an edge swap from A -> B -> C -> ... to A <-> B C -> ....
1. Make sure we can still access the rest of the list beyond the current pair (saves C).
1. Now that A <-> B is isolated from the rest of the list, save a pointer to A to connect it with the rest of the list later. Move to the next pair.
1. Connect the previous pair to the rest of the list. In this case connecting A -> D.
1. Use a dummy pointer to keep a reference to what we want to return.
1. Handle the case when there's an odd number of nodes.

    The order of the steps here is not chronological. It's just an order that we might think of when we are trying to consider the requirements of the problem.

```js
var swapPairs = function(head) {
    // Check edge case: linked list has 0 or 1 nodes, just return
    if (!head || !head.next) {
        return head;
    }
    
    let dummy = head.next;              // Step 5
    let prev = null;                    // Initialize for step 3
    while (head && head.next) {
        if (prev) {
            prev.next = head.next;      // Step 4
        }
        prev = head;                    // Step 3
        
        let nextNode = head.next.next;  // Step 2
        head.next.next = head;          // Step 1
        
        head.next = nextNode;           // Step 6
        head = nextNode;                // Move to next pair (Step 3)
    }
    
    return dummy;
};
```

The time complexity of this algorithm is 
O(n) where n is the number of nodes in the linked list. The while loop runs n times, and the work done at each iteration is O(1). The space complexity is O(1) as we are only using a few pointers.

