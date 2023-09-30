/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

// function threeSum(nums) {
//     let left = 0;
//     let middle = 1;
//     let right = nums.length - 1;
//     let res = [];
//     for (let i = 1; i < nums.length; i++) {
//         while (middle < right) {
//             if (nums[left] + nums[i] + nums[right] == 0) {
//                 res.push([nums[left], nums[i], nums[right]])
//             }
//             middle++
//         }
//         middle = 1;
//         right--;
//     }
//     return res;
// }

// function threeSum(nums) {
//     const res = [];
//     nums.sort((a,b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         const target = -nums[i] // Why is this negative "???"
//         let left = i + 1;
//         let right = nums.length - 1;
//         console.log({nums, target, left: nums[left], right: nums[right]})
//         while (left < right) {
//             const sum = nums[left] + nums[right];
//             console.log({nums, sum, target, left: nums[left], right: nums[right]})
//             if (sum > target) right-- // 
//             else if (sum < target) left++
//             else {
//                 const triplet = [nums[i], nums[left], nums[right]];
//                 res.push(triplet);
//                 while (left + 1 < right && nums[left + 1] === nums[left]) left++; 
//                 while (right - 1 > left && nums[right - 1] === nums[right]) right--; 
//         }
//         while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;  // if not at the end and the current index is not a duplicate of the next value we are looking at
//     }
//     return res;
// }

function threeSum(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    res.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo+1]) lo++;// if not at the end and the left is not a duplicate of the next value we are looking at
                    while (lo < hi && nums[hi] === nums[hi-1]) hi--;  // if not at the start and the right is not a duplicate of the next value we are looking at
                    lo++;
                    hi--;
                } else if (nums[lo] + nums[hi] < sum) lo++;
                else hi--;
            }
        }
    }
    return res;
};
console.log(threeSum([-1,0,1,2,-1,-4]))