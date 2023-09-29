# Stacks 

A stack is an ordered collection of elements where elements are only added and removed from the same end.

- Vertical structure 
- LIFO - Last in First Out
- Use of push and pop

The time complexity of stack operations is dependent on the implementation. If you use a dynamic array, which is the most common and easiest way, then the time complexity of your operations is the same as that of a dynamic array. O(1) push, pop, and random access, and O(n) search. Sometimes, a stack may be implemented with a linked list with a tail pointer.

    The characteristic that makes something a "stack" is that you can only add and remove elements from the same end. It doesn't matter how you implement it, a "stack" is just an abstract interface.

    Stacks and recursion are very similar. This is because recursion is actually done using a stack. Function calls are pushed on a stack. The call at the top of the stack at any given moment is the "active" call. On a return statement or the end of the function being reached, the current call is popped off the stack.

## 5 Methods
- Push
- Pop
- Peak
- Empty
- Search

## Exceptions

- Empty Stack Exceptions 


## When is it used:

- Undo/redo features  like text editors 
- Back/forward button in browser
- Backtracking algorithm 
- Frame to the call stack during function calls

```js
// Declaration: we will just use a list
let stack = [];

// Pushing elements:
stack.push(1);
stack.push(2);
stack.push(3);

// Popping elements:
stack.pop(); // 3
stack.pop(); // 2

// Check if empty:
!stack.length; // false

// Check element at top
stack[stack.length - 1]; // 1

// Get size
stack.length; // 1
```