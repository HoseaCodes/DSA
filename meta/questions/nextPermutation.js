/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100


Idea:

Changes made to the left part of an array have more impact on the lexicographical 
sorting than changes made to the right side, so logically, in order to find the next 
permutation that is lexicographically greater, we need to find the farthest right-most 
number that can be swapped for a larger number. Also, the larger number must come from 
the target number's right, otherwise, you'd create a permutation that is lexicographically 
lower.



We also then need to make sure that it's not just any larger number, but the next possible 
larger number from the numbers to its right. Then, we'll need to make sure that the remaining 
numbers to the right of our swapped target are in their lexicographically smallest configuration. 
(Think of it like a counter rolling over from 0999 into 1000.)
 
*/

var nextPermutation = function(nums) {
     if (nums.length <= 1) return;

    let leftHandSwap;

    // Loop through the provided numbers from right to left (excluding the first as we need something to compare it to)
    for (let i = nums.length - 2; i >= 0; i--) {
        // Check if this number is lower than the previous one (marks our left-hand swap)
        if (nums[i] < nums[i + 1]) {
            leftHandSwap = i;
            break;
        }
    }

    // Loop through the provided numbers from right to left
    for (let i = nums.length - 1; i > leftHandSwap; i--) {
        // If the number is bigger than the left-hand one
        if (nums[i] > nums[leftHandSwap]) {
            // Swap the numbers round
            [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

            // Reverse the rest of the array
            let chopped = nums.splice(leftHandSwap + 1);
            chopped.sort((a, b) => a - b);
            nums.push(...chopped);
            return;
        }
    }

    // Right-hand swap not found, return lowest permutation instead
    nums.sort((a, b) => a - b);
};