// Brute Force O(n^2)
function arrayIntersectionBF(arr1, arr2) {
    let intersection = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
                intersection.push(arr1[i])
            }
        }
    }
    return intersection
}

function arrayIntersection(arr1, arr2) {
  // Declare an empty array to store the intersection
  const intersection = [];

  // Loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    // If the current element is in arr2 and not already in the intersection array, add it
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}
arrayIntersection([1, 2, 3, 4, 5], [7, 5, 4])
module.exports = arrayIntersection;
