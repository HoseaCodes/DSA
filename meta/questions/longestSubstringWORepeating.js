/*

Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
Steps   
- Listen for clues
- Solve the problem conceptually
- Draw an example - try to use large examples and generic
- Come up with a brute force with time and space complexity
- Optimizing - possibly before I write code
- Walk through your code before coding
- Apply this into code
- Verification - ensure code is bug free
- Explain how it works 
- Understand the solution
- What is the pattern
*/

/*
1. Clue - substring, longest without repeating
2. Brute force - Iterate over the string with two loops with a string to hold the value. 
If the current string is greater the existing string replace else keep string.
3. substring = 'dominique'
Loop 1: i = d string = d
Loop 2: i = o string = do
Loop 1: i = d string = do
Loop 2: i = m string = dom
Loop 1: i = d string = dom
Loop 2: i = i string = domi
Loop 1: i = d string = domi
Loop 2: i = n string = domin
Loop 1: i = d string = domin
Loop 2: i = i string = i
Loop 1: i = d string = i
Loop 2: i = q string = iq
Loop 1: i = d string = iq
Loop 2: i = u string = iqu
Loop 1: i = d string = iqu
Loop 2: i = e string = ique
4. Time complexity: O(n^2) - because we have to iterate over the string values twice 
Space complexity: O(n) - we hold the values of the substring in a map
5. Probably best to hold in string in hashmap instead of just a string. 
The two pointer method could work. 
6. substring = 'dominique'
Loop 1: pointer1 = i = d pointer2 = 1 = o string = do
Loop 1: pointer1 = i = d pointer2 = 2 = m string = dom
Loop 1: pointer1 = i = d pointer2 = 3 = i string = domi
Loop 1: pointer1 = i = d pointer2 = 4 = n string = domin
If pointer2 value is in string move pointers and restart string
Loop 1: pointer1 = i = pointer2 pointer2 = 5 = i string = i
Loop 1: pointer1 = i = 5 pointer2 = 6 = i string = iq
Loop 1: pointer1 = i = 5 pointer2 = 7 = i string = iqu
Loop 1: pointer1 = i = 5 pointer2 = 8 = i string = ique
Loop 2: loop over hash values and return the longest
*/

// This works but will not pass all requirements
function lengthOfLongestSubstring(s) {
    let map = new Map(); // space: O(n)
    let left = 0
    let string = s[left]; // space: O(1)
    for (let i = 1; i < s.length; i++) { // time: O(n)
        if (string.includes(s[i])) {
            map.set(string, string.length)
            left = i - 1
            if (s[left] !== s[i]) { 
                string = s[left] + s[i] 
            } else { 
                left = i
                string = s[i]
            }
            
        } else {
            string += s[i]
        }
    }
    map.set(string, string.length) // time: O(1)
    string = ""
    for (const [key, value] of map) { // time: O(n)
        if (value > string.length) {
            string = key
        }
    }
    
    return string.length;
}
// Time: O(n) - Space: O(n)

// Sliding Window
/*
So to solve this problem, we can use the hash table and iterate over our term. 
Let's do two checks on 0 and 1 so as not to waste extra time. 
Now we can start, in the picture above you can see our window (blue rectangle) 
and its movement during the scan.
We gradually add our letters to the hash table, and if it already contains this letter, 
we delete the letter corresponding to the leftmost index, 
do this until we get to the desired one and delete the repetition. 
Only after that we add our new element.
The maximum length is found by comparing our current length with the new one, using Math.max.

In the picture you can see all the movement of the window and the state of our hash table.

*/

function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i])
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}