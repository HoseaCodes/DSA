/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}