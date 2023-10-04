/* 

Regular Expression Matching



Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 

Constraints:

1 <= s.length <= 20
1 <= p.length <= 20
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  // If the pattern is empty, the input string must also be empty for a match to occur.
  if (!p) return !s;

  // Check if the current characters match, or if the current character in the pattern is a '.'
  const match = s && (s[0] === p[0] || p[0] === '.');

  // If the pattern has a length of 2 and the second character is a '*', try matching zero or more of the preceding element
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p));
  } else {
    // If the pattern has a length of 1 or the second character is not a '*', move on to the next character in both the input string and the pattern
    return match && isMatch(s.slice(1), p.slice(1));
  }
}