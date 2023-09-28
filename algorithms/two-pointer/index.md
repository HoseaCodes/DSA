# Two-Pointer 

Two-pointers is an extremely common technique used to solve array and string problems. It involves having two integer variables that both move along an iterable. 

1. Start one pointer at the first index 0 and the other pointer at the last index input.length - 1.
1. Use a while loop until the pointers are equal to each other.
1. At each iteration of the loop, move the pointers towards each other. This means either increment the pointer that started at the first index, decrement the pointer that started at the last index, or both. Deciding which pointers to move will depend on the problem we are trying to solve.

```js
// pseudocode
function fn(arr):
    left = 0
    right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--
```

The strength of this technique is that we will never have more than O(n) iterations for the while loop because the pointers start n away from each other and move at least one step closer in every iteration. Therefore, if we can keep the work inside each iteration at O(1), this technique will result in a linear runtime, which is usually the best possible runtime. 

## Common Problems

1. #### Reversing a string
   ```js
    var checkIfPalindrome = function(s) {
        let left = 0;
        let right = s.length - 1;
        
        while (left < right) {
            if (s[left] != s[right]) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
   ```
1. #### Two Sum
   For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

   ```js
    var checkForTarget = function(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        
        while (left < right) {
            // curr is the current sum
            let curr = nums[left] + nums[right];
            if (curr == target) {
                return true;
            }
            
            if (curr > target) {
                right--;
            } else {
                left++;
            }
        }
        
        return false;
    }
   ```
1. #### Two Arrays
    Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

    ```js
    var combine = function(arr1, arr2) {
        // ans is the answer
        let ans = [];
        let i = 0, j = 0;
        
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                ans.push(arr1[i]);
                i++;
            } else {
                ans.push(arr2[j]);
                j++;
            }
        }
        
        while (i < arr1.length) {
            ans.push(arr1[i]);
            i++;
        }
        
        while (j < arr2.length) {
            ans.push(arr2[j]);
            j++;
        }
        
        return ans;
    }
    ```
1. #### Is Subsequence
   A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.

    ```js
    var isSubsequence = function(s, t) {
        let i = 0, j = 0;
        while (i < s.length && j < t.length) {
            if (s[i] == t[j]) {
                i++;
            }
            
            j++;
        }
        
        return i == s.length;
    };
    ```