// function removeDuplicates(arr) {
//     const newArr = [];
//     const hash = {};
//     for (let i=0; i<arr.length; ++i) {
//         if (!hash.hasOwnProperty(arr[i])) {
//             hash[arr[i]] = arr[i];
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// Why use a Map over an Object - readablity and ease of use
function removeDuplicates(arr) {
    const newArr = [];
    const hash = new Map();
    for (let i=0; i<arr.length; ++i) {
        if (!hash.has(arr[i])) {
            hash.set(arr[i], arr[i]);
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


module.exports = removeDuplicates;
