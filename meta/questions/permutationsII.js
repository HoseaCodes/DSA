/*

Permutations II

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    nums.sort((a,b)=>a-b) //sorting the array to check for duplicate
    let reqArr = []   //taking  blank output array
    
    function backtrack(givenArr, tempArr){  //in the back tracking function we are taking the given nums as givenArr and blank array as tempArr
        if(givenArr.length == 0){  //base case. while putting elemnts from given array to temp array, if given array becomes empty push the tempArray to output array and return
            reqArr.push(tempArr)
            return
        }
        for(let i=0; i< givenArr.length; i++){ //running a loop over each element
            
            if(givenArr[i] == givenArr[i-1]) continue  //if it has duplicate skip that value
            
            let newGivenArr = givenArr.slice(0,i).concat(givenArr.slice(i+1)) // removing the i-th value from given array
            let newTempArr = tempArr.concat(givenArr[i]) //putting the i-th value in the temp array
            backtrack(newGivenArr , newTempArr)  // backtracking the same
        }
    }
    backtrack(nums, [])   // calling the backtracking function
    return reqArr
};

/*

*/