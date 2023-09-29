function flattenArray(arr) {
    let res = [];

    for (const item of arr) {
       if (Array.isArray(item)) {
        res = res.concat(flattenArray(item))
       } else {
        res.push(item)
       }
    }
    
    return res;
}

module.exports = flattenArray;
