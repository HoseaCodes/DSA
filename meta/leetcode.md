

| Question   |   Completed      |   Type      |  Algorithm | <p style="text-align: center;">Notes</p>|
|----------| :-------------:|:-------------:|------:|------:|
| Longest Substring Without Repeating Characters | ✅ Completed | Arrays & Strings  | Sliding Window  | <p style="text-align: justify;">To solve this problem, we can use the hash table and iterate over our term. Let's do two checks on 0 and 1 so as not to waste extra time. Now we can start, we gradually add our letters to the hash table, if it already contains this letter, we delete the letter corresponding to the leftmost index. After that we add our new element. The maximum length is found by comparing our current length with the new one, using Math.max.</p> |
| String to Integer (atoi) |  ✅ Completed |  Arrays & Strings    |   n/a | <p style="text-align: justify;">Turn the string into an array. Create a negative and positive max and return the value if the converted string gets out of bounds. If the converted string is not a number return 0 else return the converted number.</p> |
| Roman to Integer |  ✅ Completed | Arrays & Strings |  forLoop, check i vs i + 1 | <p style="text-align: justify;">We need to create a hash table, the characters in which will correspond to a certain number. Passing along the line, we will check the current and the next character at once, if the current one is greater than the next one, then everything is fine, we add it to the result (it is initially equal to 0), otherwise, we subtract the current value from the next value (for example, the current 10, and the next 100 , we do 100 - 10, and we get 90), we also add to the result and additionally increase the index by 1. As a result, at the end of the loop, we will get the result we need.</p> |
| 3Sum |  ✅ Completed | Arrays & Strings | Two Pointer | <p style="text-align: justify;">First, sort the input array in non-decreasing order. Iterate through the array with a pointer "i" from 0 to n-2, where n is the size of the array. For each "i", initialize two pointers "lo" and "hi", where "lo" starts at i+1 and "hi" starts at n-1. Calculate the sum of elements at i, lo, and hi. If the sum is equal to zero, add the triplet to the result. If the sum is less than zero, increment "lo" to move towards higher values. If the sum is greater than zero, decrement "hi" to move towards lower values. To avoid duplicates, if a value has already been considered, skip it in the future iterations. Continue the above process until all possible triplets are considered.</p> |
| Remove Duplicates from Sorted Array |  ✅ Completed | Arrays & Strings | Two Pointer | <p style="text-align: justify;">Create an insertIndex(first pointer) then iterate over the sorted number array starting at index 1. If the current index value is not equal to the pervious index value then assign the insertIndex index (nums[insertIndex]) to the current index value and increment the insertIndex value by 1. Essentinally, we hold the index of value that needs to be replaced and when we run into the first value that has not been seen we replace the index of value that needs to be replaced and increase that index. Continue this through the remainder of the array and return the insertIndex.</p>  |
| Next Permutation |  ✅ Completed | Arrays & Strings | reverse forLoop | <p style="text-align: justify;">We loop through the numbers provided from end to start, looking for the first occurrence of a number decreasing, which will be our “left swap”. Next, we again look from right-to-left, until we find a number higher than our left swap, and swap the two numbers round. This effectively gives us the lowest possible “swap” that can be achieved for the given array. <br/> <br/> To give a practical example, given the array ```[7, 2, 3, 1, 5, 4, 3, 2, 0]``` , we can see that the first decrease when looking right-to-left is from 5 to 1, making 1 our left swap. Going right-to-left again, we can then see that the first number higher than our left swap is 2, so we swap them around to give us ```[7, 2, 3, 2, 5, 4, 3, 1, 0]```. <br/> <br/> Next, we sort the numbers to the right of the left-most swapped number to create the lowest possible permutation of the remaining digits. So in the example above, we take the numbers from the right of the moved-over 2, which are ```[5, 4, 3, 1, 0]```, and swap it for its lowest permutation (which we can achieve simply by ordering that array of numbers); ```[0, 1, 3, 4, 5]```. By replacing the original values, this gives us the next greatest permutation of the original number: ```[7, 2, 3, 2, 0, 1, 3, 4, 5]```. <br/> <br/> As another example, let’s take ```[3, 8, 3, 7, 5, 1]```. So, going right-to-left, the first decrease comes at number 3 (index 2), and the first higher number than this, again going right-to-left, is 5, so we swap those around to give us ```[3, 8, 5, 7, 3, 1]```. We then order the numbers on the right of the swapped-over 5 and end up with ```[3, 8, 5, 1, 3, 7]```, which is indeed the next lowest permutation. <br/> <br/> In some cases, there may not actually be the next lowest permutation (for example in the array ```[3, 2, 1]```). In these cases, in line with the question spec, we simply return the lowest permutation, which is easily obtained by ordering the entire array, which gives us ```[1, 2, 3]```.</p> |
| Multiply Strings |  Not Completed | Arrays & Strings |    n/a | Notes |
| Group Anagrams |  Not Completed | Arrays & Strings |    n/a | Notes |
| Add Binary |  Not Completed | Arrays & Strings |    n/a | Notes |
| Minimum Window Substring |  Not Completed | Arrays & Strings |    n/a | Notes |
| Merge Sorted Array |  Not Completed | Arrays & Strings |    n/a | Notes |
| Valid Palindrome |  Not Completed | Arrays & Strings |    n/a | Notes |
| Read N Characters Given Read4 |  Not Completed | Arrays & Strings |    n/a | Notes |
| Read N Characters Given Read4 II - Call multiple times |  Not Completed | Arrays & Strings |    n/a | Notes |
| One Edit Distance  |  Not Completed | Arrays & Strings |    n/a | Notes |
| Product of Array Except Self  |  Not Completed | Arrays & Strings |    n/a | Notes |
| Integer to English Words  |  Not Completed | Arrays & Strings |    n/a | Notes |
| Move Zeroes  |  Not Completed | Arrays & Strings |    n/a | Notes |
| Longest Substring with At Most K Distinct Characters  |  Not Completed | Arrays & Strings |    n/a | Notes |
| Subarray Sum Equals K  |  Not Completed | Arrays & Strings |    n/a | Notes |
| Validate IP Address  |  Not Completed | Arrays & Strings |    n/a | Notes |
| Valid Palindrome II  |  Not Completed | Arrays & Strings |    n/a | Notes |
| Add Two Numbers  |  Not Completed | Linked Lists |    n/a | Notes |
| Merge Two Sorted Lists  |  Not Completed | Linked Lists |    n/a | Notes |
| Copy List with Random Pointer  |  Not Completed | Linked Lists |    n/a | Notes |
| Reorder List  |  Not Completed | Linked Lists |    n/a | Notes |
| Validate Binary Search Tree  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Flatten Binary Tree to Linked List  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Binary Tree Maximum Path Sum  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Clone Graph  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Binary Tree Right Side View  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Number of Islands  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Lowest Common Ancestor of a Binary Tree  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Binary Tree Paths  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Alien Dictionary  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Shortest Distance from All Buildings  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Diameter of Binary Tree  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Accounts Merge  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Shortest Distance from All Buildings  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Convert Binary Search Tree to Sorted Doubly Linked List  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Is Graph Bipartite?  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Binary Tree Vertical Order Traversal  |  Not Completed | Trees and Graphs |    n/a | Notes |
| Letter Combinations of a Phone Number  |  Not Completed | Recursion |    n/a | Notes |
| Permutations  |  Not Completed | Recursion |    n/a | Notes |
| Permutations II  |  Not Completed | Recursion |    n/a | Notes |
| Remove Invalid Parentheses  |  Not Completed | Recursion |    n/a | Notes |
| Regular Expression Matching  |  Not Completed | Recursion |    n/a | Notes |
| Subsets  |  Not Completed | Recursion |    n/a | Notes |
| Strobogrammatic Number II  |  Not Completed | Recursion |    n/a | Notes |
| Divide Two Integers  |  Not Completed | Sorting and Searching |    n/a | Notes |
| Search in Rotated Sorted Array  |  Not Completed | Sorting and Searching |    n/a | Notes |
| Find First and Last Position of Element in Sorted Array  |  Not Completed | Sorting and Searching |    n/a | Notes |
| Pow(x, n)  |  Not Completed | Sorting and Searching |    n/a | Notes |
| Merge Intervals  |  Not Completed | Sorting and Searching |    n/a | Notes |
| Find Peak Element  |  Not Completed | Sorting and Searching |    n/a | Notes |
| First Bad Version  |  Not Completed | Sorting and Searching |    n/a | Notes |
| Intersection of Two Arrays  |  Not Completed | Sorting and Searching |    n/a | Notes |
| Intersection of Two Arrays II  |  Not Completed | Sorting and Searching |    n/a | Notes |
| Longest Palindromic Substring  |  Not Completed | Dynamic Programming |    n/a | Notes |
| Longest Valid Parentheses  |  Not Completed | Dynamic Programming |    n/a | Notes |
| Decode Ways  |  Not Completed | Dynamic Programming |    n/a | Notes |
| Best Time to Buy and Sell Stock  |  Not Completed | Dynamic Programming |    n/a | Notes |
| Word Break  |  Not Completed | Dynamic Programming |    n/a | Notes |
| Range Sum Query 2D - Immutable  |  Not Completed | Dynamic Programming |    n/a | Notes |
| Continuous Subarray Sum  |  Not Completed | Dynamic Programming |    n/a | Notes |
 

                  


             
                              
