function sumOfEvenSquares(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            sum = sum + Math.pow(nums[i], 2)
        }
    }
    return sum;
}
function sumOfEvenSquares2(nums) {
    const evens = nums.filter((num) => num % 2 === 0);
    const squared = evens.map((num) => {
        return num ** 2
    })
    const sum = squared.reduce((total, num) => { return total + num}, 0)
    return sum;
}

module.exports = sumOfEvenSquares;
