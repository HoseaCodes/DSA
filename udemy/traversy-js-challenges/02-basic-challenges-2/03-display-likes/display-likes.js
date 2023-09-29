function displayLikes(arr) {
    console.log(arr)
    if (arr.length === 0) return `no one likes this`
    if (arr.length === 1) return `${arr[0]} likes this`
    if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`
    if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    if (arr.length > 3) return `${arr[0]}, ${arr[1]} and ${(arr.length) - 2} others like this`
}
module.exports = displayLikes;
