/* 

Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 

Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= sum(nums[i]) <= 231 - 1
1 <= k <= 231 - 1
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function(nums, k) {
    // The question we should ask is, does any subarray increase by a multiple of k?
    // If so then there must be some subarray whose sum === that multiple of k.

    // The modulo operator really tells us how far away from the previous multiple 
    // of k we are. So, for us to be modulo away from the previous multiple again, the 
    // sum of the array since (non-inclusive of) the previous appearance of the modulo 
    // must === some multiple of k. (NB: 0 is also a multiple of k).

    // We use modulo and not just the difference between prefixSums to account for 
    // multiples of k and not just k itself.
    
    // Ex: 
    // Array (k = 6)                    23    2    4    6    7
    // prefixSum                        23   25   29   35   42
    // remainder (prefixSum % k)         5    1    5    5    0

    // For us to see % === 5 again, we must have increased by some multiple of k. In this case,
    // we increased from 23 to 29 so the array after the first appearance ([2, 4]) must sum to 
    // that multiple of k
    
    // * prefixSum % k: leftmost i
    // * Without this, we'll never check the increase from i = 0 since       
    //   we calculate the subarray since (non-inclusive of) the first                               
    //   appearance of a modulo
    let prefixSum = 0;
    let remainderMap = new Map();
    remainderMap.set(0, -1);                                                
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        // * Calculate how far we are from the previous multiple of k
        let remainder = prefixSum % k;                                      

        // * Have we been exactly this far away from a multiple of k before?
        if (remainderMap.has(remainder)) {                                  
            // * Is the subarray.length >= 2?
            if (i - remainderMap.get(remainder) >= 2) {                     
                return true; 
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }

    return false;
};
