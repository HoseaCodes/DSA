function longestConsecutiveSequence(nums) {
    let sortedNums = nums.sort((a, b) => a - b)
    let count = 0;
    const set = new Set()
    for (let i = 0; i < sortedNums.length - 1; i++) {
        console.log(sortedNums[i], sortedNums[i + 1])
        if (sortedNums[i] + 1 === (sortedNums[i + 1])) {
            count++;
            console.log(true)
        } else {
            set.add(count + 1)
            count = 0
        }
    }

    let max = 0
    for (const num of set) {
        if (num > max) max = num
    }

    return Math.max(max, count + 1)
}

module.exports = longestConsecutiveSequence;
