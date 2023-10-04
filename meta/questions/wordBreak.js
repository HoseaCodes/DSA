/* 

Word Break

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.

*/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const failedStarts = {};
  const dp = (start) => {
    if (start === s.length) {
      return true;
    }
    if (failedStarts[start]) {
      return false;
    }
    for (let i = start; i < s.length; ++i) {
      const string = s.slice(start, i + 1);
      if (wordDict.includes(string) && dp(i + 1)) {
        return true;
      }
    }
    failedStarts[start] = true;
    return false;
  };
  return dp(0);
};

/*
Intuition:
The problem is a classic problem of dynamic programming where we need to find if the given 
string can be segmented into the words of the dictionary. We can solve this problem using 
the DP approach, where we create a boolean array dp[] of size n+1, where n is the length of 
the input string s. Each element of the DP array represents whether the substring of s 
starting from the beginning of the string up to the index i can be segmented into words from 
the dictionary wordDict.

The recursive approach used in the given code is also a valid approach to solve the problem. 
The approach is similar to DP approach where we compute the result of the function dp(start) 
recursively.

Approach:
The given code uses a recursive approach with memoization to solve the problem. The function 
dp(start) takes a starting index start as its parameter and returns true if the substring of s 
starting from index start can be segmented into words from the dictionary wordDict.

The function first checks if the starting index start is equal to the length of the input string s. 
If it is, then it returns true since we have successfully segmented the entire string into words 
from the dictionary.

If the starting index start has been checked before and it was not possible to segment the substring 
starting from start into words from the dictionary, we return false immediately, to avoid recomputing 
the same substring multiple times.

For each starting index start, the code loops through all possible substrings of s starting from 
start up to n-1, where n is the length of the input string s. If the substring exists in the 
dictionary wordDict, the function dp() calls itself recursively with the next starting index end as 
its parameter. If the recursive call returns true, we return true from the current call as well.

Once we have computed the result of dp(0), we can return the result.

Complexity:

- Time complexity: The time complexity of the given recursive approach with memoization is $$O(n^2)$$, where n is the length of the input string s. This is because we are computing all possible substrings of s starting from start up to n-1, and for each substring, we are checking if it exists in the dictionary wordDict, which takes O(n) time in the worst case. We are also memoizing the results to avoid recomputing the same substrings multiple times.

- Space complexity: The space complexity of the given recursive approach with memoization is $$O(n)$$, where n is the length of the input string s. This is because we are using memoization to store the results of the previous computations and retrieving them if the same substring is encountered again. We are also using the failedStarts object to keep track of the starting indices of substrings that cannot be segmented into words from the dictionary.

*/