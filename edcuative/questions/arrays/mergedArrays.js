/* 
Challenge: Merge Two Sorted Arrays
Given two sorted arrays, merge them into one array that is sorted.

Problem Statement 
Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

Input: 
Two sorted arrays.

Output: 
A merged sorted array consisting of all elements of both input arrays.


Sample Input 
arr1 = [1,3,4,5]  
arr2 = [2,6,7,8]

Sample Output 
arr = [1,2,3,4,5,6,7,8]

*/

/* Solution One */

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

/* Time Complexity
The time complexity for this solution will be O(nlogn) since we are using the sort() function.
*/

/* Solution Two */

function mergeArrays(arr1, arr2) {
    let arr = []
    let pointer = 0
    let pointer2 = 0
    //Traverse both arrays and insert smaller value from arr1 or arr2
    //into result array and then increment that array index.
    //If an array is completely traversed, while other one is left then just
    //copy all the remaining elements into result array
    while ((pointer < arr1.length) && (pointer2 < arr2.length)) {
        if (arr1[pointer] > arr2[pointer2]) {
            arr.push(arr2[pointer2]);
            pointer2++
        } else {
            arr.push(arr1[pointer]);
            pointer++
        }
    }
    if (pointer <= arr1.length - 1) {
        arr1.splice(0, pointer)
        arr = arr.concat(arr1);
    } else if (pointer2 <= (arr2.length - 1)) {
        arr2.splice(0, pointer2)
        arr = arr.concat(arr2)
    }
   
    return arr;
}

/* Time Complexity
The time complexity for this algorithm is O(n + m), where n and m 
are the lengths of arr1 and arr2, respectively. This is because both 
the arrays are iterated over once.
*/