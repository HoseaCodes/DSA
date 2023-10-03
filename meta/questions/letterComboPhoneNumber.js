/*
Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

var letterCombinations = function(digits) {
  // if length of digits is 0 then return empty array
  if (!digits || digits.length === 0) return [];
  
  // initialize map object for every digits from 2 to 9 and 
  // assign telephone number letters as value in the form of an array
  let digitToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  
  // initialize an empty array
  let result = [];
  
  function backtrack(combination, nextDigits) {
    
    if (nextDigits.length === 0) {
      result.push(combination);
    }
    else {
      
      let currentDigit = nextDigits[0];
      let letters = digitToLetters[currentDigit];
      
      for (let letter of letters) {
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  }
  backtrack('', digits);
  return result; 
};

/*
Intuition:
- Using Backtracking.
- A Recursive approach followed to generate all possible letter combinations.
- You can create a mapping of digits to letters and then iterate through the input digits to generate all the combinations.
Approach:
1. Define a mapping of digits to letters (digitToLetters object) according to the telephone button layout.
2. Create an empty array called result to store all the valid combinations.
3. Define a recursive function called backtrack, which takes two parameters: combination (current combination of letters) and nextDigits (the remaining digits to be processed).
4. In the backtrack function :-
    - If there are no more digits to process (nextDigits.length === 0), the current combination is complete, so add it to the result array.
    - Otherwise, get the first digit from nextDigits.
    - Find the corresponding letters for that digit from the digitToLetters mapping.
    - For each letter, call the backtrack function recursively with the updated combination and the remaining digits (excluding the current one).
5. Initialize the recursive function with an empty combination and the input digits string.
6. Return the result array containing all the valid letter combinations.

-> The backtracking process explores all possible combinations of letters, branching out for each digit and its corresponding letters until all digits are processed. 
As a result, the code generates all possible letter combinations from the given input digits.

Complexity:

- Time complexity: $$O(4^n)$$

1. Here n is the length of the input string.
2. This is because the backtracking algorithm can generate $$(4^n)$$ different combinations of letters, one for each possible combination of digits.
3. The backtrack() function is called recursively n times, once for each digit in the input string.
4. Each call to the backtrack() function takes O(4) time, because there are 4 possible letters that can be added to the current combination.
5. Since there are n digits in the input string, the total number of recursive calls becomes ***$$(4^n)$$***.

- Space complexity: $$O(n)$$

1. Here n is the length of the input string.
2. This is because the backtracking algorithm needs to store the current combination of letters, which can be at most n characters long.
3. Also needs to store the remaining digits to be processed, which can be at most (n-1) characters long.
*/