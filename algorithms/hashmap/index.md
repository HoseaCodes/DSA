# Hash Map

## Examples

#### Two Sum
Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target. You cannot use the same index twice.

```js
var twoSum = function(nums, target) {
    let dic = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        if (dic.has(complement)) {
            return [i, dic.get(complement)];
        }
        
        dic.set(num, i);
    }

    return [-1, -1];
};
```

The time complexity is O(n) as the hash map operations are O(1). This solution also uses O(n) space as the number of keys the hash map will store scales linearly with the input size.

#### First Letter to Appear Twice

Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character.

Brute force
```js
var repeatedCharacter = function(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        for (let j = 0; j < i; j++) {
            if (s[j] == c) {
                return c;
            }
        }
    }
    
    return "";
};
```
This is O(n^2) due to the nested loop. The second loop is checking for the existence of c, which can be done in O(1) using a set.


with set

```js
var repeatedCharacter = function(s) {
    let seen = new Set();
    for (const c of s) {
        if (seen.has(c)) {
            return c;
        }
        
        seen.add(c);
    }
    
    return " ";
};
```
This improves our time complexity to O(n) as each for loop iteration now runs in constant time.

The space complexity is a more interesting topic of discussion. Many people will argue that the space complexity is O(1) because the input can only have characters from the English alphabet, which is bounded by a constant (26). This is very common with string problems and technically correct. In an interview setting, this is probably a safe answer, but you should also note that the space complexity could be O(m), where m is the number of allowable characters in the input. This is a more general answer and also technically correct.

#### Find all
Given an integer array nums, find all the numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

```js
let findNumbers = nums => {
    let ans = [];
    let numsSet = new Set(nums);

    for (const num of nums) {
        if (!numsSet.has(num + 1) && !numsSet.has(num - 1)) {
            ans.push(num);
        }
    }

    return ans;
}
```

Because the checks are O(1), the time complexity is O(n) since each for loop iteration runs in constant time. The set will occupy O(n) space