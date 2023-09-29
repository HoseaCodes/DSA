# Stacks

## Examples

#### Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. The string is valid if all open brackets are closed by the same type of closing bracket in the correct order, and each closing bracket closes exactly one open bracket.

For example, s = "({})" and s = "(){}[]" are valid, but s = "(]" and s = "({)}" are not valid.

```js
var isValid = function(string) {
    let stack = [];
    const matching = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    
    for (const char of string) {
        if (char in matching) { // if char is an opening bracket
            stack.push(char);
        } else {
            if (!stack.length) {
                return false;
            }
            
            let previousOpening = stack.pop();
            if (matching[previousOpening] != char) {
                return false;
            }
        }
    }
```

Because the stack's push and pop operations are O(1), this gives us a time complexity of O(n), where n is the size of the input array. This is because each element can only be pushed or popped once. The space complexity is also O(n) because the stack's size can grow linearly with the input size.


#### Remove All Adjacent Duplicates In String

You are given a string s. Continuously remove duplicates (two of the same character beside each other) until you can't anymore. Return the final string after this.

For example, given s = "abbaca", you can first remove the "bb" to get "aaca". Next, you can remove the "aa" to get "ca". This is the final answer.

The tricky part of this problem is that not all removals are necessarily available at the start. As you can see in the example, deleting the "aa" is only possible after deleting the "bb". We don't need to delete the first character until we have already iterated quite a bit past it. What if the input was s = "abccba"? We have the same problem with the b now as well, and the a is two layers back. The deletion order is c -> b -> a. This follows the LIFO pattern, where the last (most recent) character is the first one to be deleted (the first half of characters being deleted is "abc", and we need to delete the c, then b, then a).

When we recognize a LIFO pattern, we know we can use a stack. Iterate over the input and put characters in the stack. At each step, if the top of the stack is the same as the current character, we know that they are adjacent (at some point in time) and can be deleted.

```js
var removeDuplicates = function(s) {
    let stack = [];
    for (const c of s) {
        if (stack.length && stack[stack.length - 1] == c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    
    return stack.join("");
};
```

This algorithm has a time and space complexity of O(n), where n is the length of the input. This is because the stack operations in all implementations above are O(1), and the stacks themselves can grow to O(n) size.


#### Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

For example, given s = "ab#c" and t = "ad#c", return true. Because of the backspace, the strings are both equal to "ac".

Once again, we can recognize that the backspace follows the LIFO pattern, where the first character to be deleted is the one that was most recently typed. We can just simulate the typing of the strings using a stack, and then compare them at the end.

When typing characters, push them onto a stack. Whatever character is at the top of the stack is the most recently typed character, so when we backspace, we can just pop. Make sure to be careful of the edge case where we backspace on an empty string.

```js
var backspaceCompare = function(s, t) {
    let build = s => {
        let stack = [];
        for (const c of s) {
            if (c != "#") {
                stack.push(c);
            } else if (stack.length) {
                stack.pop();
            }
        }
        
        return stack.join("");
    }
    
    return build(s) == build(t);
};
```

Just like in the previous approaches, this approach has a time and space complexity linear with the input sizes, because our stack implementations are efficient.

