# Sliding window

Sliding windows work the same with arrays and strings - the important thing is that they're iterables with ordered elements. 

### When should we use sliding window?

There is a very common group of problems involving subarrays that can be solved efficiently with sliding window. 

Whenever a problem description talks about subarrays, you should figure out if sliding window is a good option by analyzing the problem description. If you can find the things mentioned below, then it's a good bet.

FIrst, the problem will either explicitly or implicitly define criteria that make a subarray "valid". There are 2 components regarding what makes a subarray valid:

1. A constraint metric. This is some attribute of a subarray. It could be the sum, the number of unique elements, the frequency of a specific element, or any other attribute.

1. A numeric restriction on the constraint metric. This is what the constraint metric should be for a subarray to be considered valid.

Second, the problem will ask you to find valid subarrays in some way.

1. The most common task you will see is finding the best valid subarray. The problem will define what makes a subarray better than another. For example, a problem might ask you to find the longest valid subarray.

1. Another common task is finding the number of valid subarrays. We will take a look at this later in the article.

### Pseudocode

```js
function fn(nums, k):
    left = 0
    curr = 0
    answer = 0
    for (int right = 0; right < nums.length; right++):
        curr += nums[right]
        while (curr > k):
            curr -= nums[left]
            left++

        answer = max(answer, right - left + 1)

    return answer
```

or 

```js 
function fn(arr):
    left = 0
    for (int right = 0; right < arr.length; right++):
        Do some logic to "add" element at arr[right] to window

        while WINDOW_IS_INVALID:
            Do some logic to "remove" element at arr[left] from window
            left++

        Do some logic to update the answer
```

### Complexity

In terms of time complexity, any algorithm that looks at every subarray will be at least 
O(n^2), which is usually too slow. A sliding window guarantees a maximum of 2n window iterations - the right pointer can move n times and the left pointer can move n times. This means if the logic done for each window is O(1), sliding window algorithms run in O(n), which is much faster.

You may be thinking: there is a while loop inside of the for loop, isn't the time complexity 
O(n^2) The reason it is still O(n) is that the while loop can only iterate n times in total for the entire algorithm (left starts at 0, only increases, and never exceeds n). If the while loop were to run n times on one iteration of the for loop, that would mean it wouldn't run at all for all the other iterations of the for loop. This is what we refer to as amortized analysis - even though the worst case for an iteration inside the for loop is O(n), it averages out to O(1) when you consider the entire runtime of the algorithm.

### Example 

1. #### Subarray Product Less Than K.

    Given an array of positive integers nums and an integer k, return the number of subarrays where the product of all the elements in the subarray is strictly less than k.

    For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. The subarrays with products less than k are:

    [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

    ```js
    var numSubarrayProductLessThanK = function(nums, k) {
        if (k <= 1) {
            return 0;
        }

        let ans = 0, left = 0, curr = 1;
        
        for (let right = 0; right < nums.length; right++) {
            curr *= nums[right];
            while (curr >= k) {
                curr /= nums[left];
                left++;
            }
            
            ans += right - left + 1;
        }
        
        return ans;
    };
    ```

1. #### Find the length of the longest subarrat

    Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k. This is the problem we have been talking about above. We will now formally solve it.

    ```js
    var findLength = function(nums, k) {
        // curr is the current sum of the window
        let left = 0, curr = 0, ans = 0;
        for (let right = 0; right < nums.length; right++) {
            curr += nums[right];
            while (curr > k) {
                curr -= nums[left];
                left++;
            }
            ans = Math.max(ans, right - left + 1);
        }
        return ans;
    }
    ```

1. #### Binary String
    You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?

    For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.

    ```js
    var findLength = function(s) {
        // curr is the current number of zeros in the window
        let left = 0, curr = 0, ans = 0;
        for (let right = 0; right < s.length; right++) {
            if (s[right] == "0") {
                curr++;
            }
            
            while (curr > 1) {
                if (s[left] == "0") {
                    curr -= 1;
                }
                left++;
            }
            
            ans = Math.max(ans, right - left + 1);
        }
        
        return ans;
    }
    ```

1. #### Sum of the subarray
   
    Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.

    ```js
    var findBestSubarray = function(nums, k) {
        let curr = 0;
        for (let i = 0; i < k; i++) {
            curr += nums[i];
        }
        
        let ans = curr;
        for (let i = k; i < nums.length; i++) {
            curr += nums[i] - nums[i - k];
            ans = Math.max(ans, curr);
        }
        
        return ans;
    }
    ```