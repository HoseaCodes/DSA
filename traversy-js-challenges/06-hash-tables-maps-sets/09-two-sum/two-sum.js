function twoSum(arr, target) {
  const numSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numSet.has(complement)) {
      return [arr.indexOf(complement), i];
    }
    numSet.add(arr[i]);
  }
    return []
}

module.exports = twoSum;
