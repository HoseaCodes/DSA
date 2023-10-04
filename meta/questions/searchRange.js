/*

  Find First and Last Position of Element in Sorted Array



Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/


function binarySearch(nums, target, flag) {
    let sizeOfArray = nums.length - 1;
    let left = 0;
    let right = sizeOfArray;
    let ans = -1;

    while(left <= right) {
        let midIndx = left + Math.floor((right - left) / 2);
        if(nums[midIndx] == target){
            ans = midIndx;
            if(flag == 'left'){
                right = midIndx - 1;
            } else {
                left = midIndx + 1;
            }
        } else if(nums[midIndx] > target) {
            right = midIndx - 1;
        } else {
            left = midIndx + 1;
        }
    }

    return ans;
}

var searchRange = function(nums, target) {
    let first = binarySearch(nums, target, 'left');
    let last = binarySearch(nums, target, 'right');
    return [first, last];
};

/* 

Intuition:
The problem requires us to find the starting and ending position of a given target value. 
Given the array is sorted, a binary search would be an efficient method to locate the target. 
However, standard binary search only finds a single index where the target is located. In this 
scenario, the target might appear multiple times, so we need a modified binary search to find 
both the starting and ending position.

Approach:
Implement a modified binary search algorithm where:

If the target is found and the flag is set to 'left', continue the search on the left side.
If the target is found and the flag is set to 'right', continue the search on the right side.
This way, for the 'left' flag, we find the first occurrence and for the 'right' flag, we find the last occurrence.
Call the binarySearch function twice: once with the 'left' flag and once with the 'right' flag. The combination of these 
two results will give the range [first occurrence, last occurrence].

Complexity

Time complexity:
Since we're using a binary search algorithm twice, the time complexity will be $$O(\log n)$$.

Space complexity:
We're not using any additional data structures, so the space complexity is constant: $$O(1)$$.

*/
