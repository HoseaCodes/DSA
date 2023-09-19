function areAllCharactersUnique(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], 1)
        } else {
            return false
        }
    }
    return true
}

module.exports = areAllCharactersUnique;
