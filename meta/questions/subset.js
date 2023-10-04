/* 
Subset

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.*/

var subsets = function(nums) {
    // initialize a output array
    let output = [];

    // add subsets to output array
    getSubset(nums, 0, [])

    return output;


    function getSubset(nums, index, subset)
    {
        // base case
        if(index == nums.length)
        {
            // add the subset to output
            output.push(subset);
            return;
        }
        // 1. not take the num at the index
        // call the same function for the next index with the same subset
        getSubset(nums, index+1, subset);

        // 2. take the num at the index
        // call the same function for the next index with updated subset
        getSubset(nums, index+1, [...subset, nums[index]]);
    }
};