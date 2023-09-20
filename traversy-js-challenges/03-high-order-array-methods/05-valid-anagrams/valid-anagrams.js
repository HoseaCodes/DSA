function validAnagrams2(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
function validAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    const map1 = mapAnagrams(str1)
    const map2 = mapAnagrams(str2)
     for (var [key, val] of map1) {
        let map2Val = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (map2Val !== val || (map2Val === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true
}

function mapAnagrams (str1) {
    let map = new Map();
    for (let index = 0; index < str1.length; index++) {
        if (!map.has(str1[index])) {
            map.set(str1[index], 1)
        } else {
            map.set(str1[index], map.get(str1[index]) + 1)
        }        
    }
    return map
}

module.exports = validAnagrams;
