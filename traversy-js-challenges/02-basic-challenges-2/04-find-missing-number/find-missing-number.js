// O(n)
function findMissingNumber2(arr) {
    arr = arr.sort((a, b) => a -b)
    for (let i = 0; i <  arr.length; i++) {
        if (arr[i + 1] !== (arr[i] + 1)) return arr[i] + 1
    }
}

function findMissingNumber(arr) {
  // If the array is empty or undefined, return undefined
  if (!arr || arr.length === 0) {
    return undefined;
  }
  // Add 1 to the length of the array to account for the missing number
  const n = arr.length + 1;
  // Calculate the expected sum of the numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;
  // Calculate the actual sum of the numbers in the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  // Return the difference between the expected sum and the actual sum
  return expectedSum - actualSum;
}


findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])
module.exports = findMissingNumber;
