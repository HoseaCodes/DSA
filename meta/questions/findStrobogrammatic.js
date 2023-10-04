/* 
Strobogrammatic Number II

Given an integer n, return all the strobogrammatic numbers that are of length n. You may return the answer in any order.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:

Input: n = 2
Output: ["11","69","88","96"]
Example 2:

Input: n = 1
Output: ["0","1","8"]
 

Constraints:

1 <= n <= 14
*/

var findStrobogrammatic = function(n) {
  if (n === 1) return ['0', '1', '8'];
  
  // Dictionary to translate between digits when 180'd.
  const strobDict = { 0:0, 1:1, 6:9, 8:8, 9:6 };
  
  // Answer to be returned and array to be iterated over.  Could also have done Object.keys(strobDict) though.
  const ans = [], poss = [0,1,6,8,9];
  
  function backtrack(cur = '') {
  
	// Below algorithm Only builds up valid strobogramitic numbers.
	// When cur.length is reached, just push to ans.
    if (cur.length === n) return ans.push(cur);
    
	// If cur.length >= n / 2 we know what the second half Has to be.
	// I.e. - n = 4 and cur === '10', below will run again with '100', then next round '1001'.
    if (cur.length >= n / 2) {
      return backtrack(cur + strobDict[cur[n - cur.length - 1]])
    }
    
	// This loop builds up the first half of our number.
    for (let num of poss) {
	
	  // If !num (I.e. - num === 0) and !cur.length, we skip 0 because '00' for example is invalid.
      if (!num && !cur.length) continue;
	  
	  // Here we check to see if next number added will be middle number.  If so, we can't use
	  // 6 or 9.  161 = 191 when 180'd.  6 and 9 are the only ones banned from mid spot so we
	  // skip them.
      if (n % 2 && cur.length + 1 > n / 2 && (num === 6 || num === 9)) continue;
	  
	  // If above checks all pass, number in consideration is valid so we send it off.
      backtrack(cur + num)
    }
  }
  
  backtrack();
  return ans;
};