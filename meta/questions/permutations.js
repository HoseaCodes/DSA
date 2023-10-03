/* 
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

const backtrack = (result, tempArray, nums) => {
    if(tempArray.length === nums.length){
        result.push([...tempArray]);
        return;
    }
    for(let num of nums){
        if(tempArray.includes(num)) continue;
        tempArray.push(num);
        backtrack(result, tempArray, nums)
        tempArray.pop();
    }
}

var permute = function(nums) {
    const result = [];
    backtrack(result, [], nums);
    return result;
};


/*
Approach:
1. Create a result array.
2. Create a function backtrack with result array, a temp array and the nums array as parameters.
3. In the function, we start a loop for elements of nums.
4. On each iteration, we check if the temp array contains nums, if it does then we continue.
5. Else, we push the current element in the array and call the backtrack function again with the same parameters.
6. Now, the base condition for this recursion is if the temp array's length becoes strictly equal to nums array length, we push the array's shallow clone into the result array and then we return in order to stop the code and start backtracking.
7. The moment we backtrack, we enter the for loop of the previous recursion stack and we remove the last element of that stack from the temp.
8. Again In the next iteration, the temp array will be filled and the process will continue till the iteration of loop ends.

Complexity:

- Time complexity: O(n!*n)
- Space complexity: O(n)
*/