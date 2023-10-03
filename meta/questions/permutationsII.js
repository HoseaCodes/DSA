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
The idea is to loop trough each element and at each element backtrack such that that element is added at first and then alternatively all other elements is added


Note: for a backtracking algorithm, usually there are some explorations that would lead to a dead end, and we have to abandon those explorations in the middle.

However, due to the specificity of this problem and our exploration strategy, each exploration will result in a valid permutation, i.e. none of the efforts is in vain. This insight would prove to be useful in the following complexity analysis.

Complexity Analysis:

Let N be the length of the input array. Hence, the number of permutations would be at maximum N!, i.e. 
N⋅(N−1)⋅(N−2)...1, when each number in the array is unique.

Time Complexity: O(∑^N k=1 P(N,k)) where P(N,k) = N!/(N−k)! = N(N−1)...(N−k+1) is so-called k-permutations_of_N 
or partial permutation.

As one can see in the exploration graph we have shown earlier, the execution of the backtracking algorithm will unfold itself as a tree, 
where each node is an invocation of the recursive function backtrack(comb, counter). The total number of steps to complete the exploration 
is exactly the number of nodes in the tree. Therefore, the time complexity of the algorithm is linked directly with the size of the tree.

It now boils down to estimating the number of nodes in the tree. As we know now, each level of the tree corresponds to a specific stage of 
the exploration. At each stage, the number of candidates to explore is bounded. For instance, at the first stage, at most we would have 
N candidates to explore, i.e. the number of nodes at this level would be N. Moving on to the next stage, for each of the nodes in the first stage, we would have 
N−1 child nodes. Therefore, the number of nodes at this stage would be N⋅(N−1). So on and so forwards.


By summing up all the nodes across the stages, we would then obtain the total number of nodes as 
∑^N k=1 P(N,k) where P(N,k)= N!/(N−k)! = N(N−1)...(N−k+1). As a result, the exact time complexity of the algorithm is 
O(∑^N k=1 P(N,k)). The above complexity might appear a bit too abstract to comprehend. Here we could provide 
another loose upper bound on the complexity.

It takes N steps to generate a single permutation. Since there are in total N! possible permutations, at most it would take us 
N⋅N! steps to generate all permutations, simply assuming that there is no overlapping effort (which is not true).

Space Complexity: O(N)

First of all, we build a hash table out of the input numbers. In the worst case where each number is unique, we would need 
O(N) space for the table.

Since we applied recursion in the algorithm which consumes some extra space in the function call stack, we would need another 
O(N) space for the recursion.

During the exploration, we keep a candidate of permutation along the way, which takes yet another 
O(N).

To sum up, the total space complexity would be O(N)+O(N)+O(N)=O(N).

Note, we did not take into account the space needed to hold the results. Otherwise, the space complexity would become O(N⋅N!).

*/