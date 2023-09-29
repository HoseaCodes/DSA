function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[aeiou]/i.test(str[i])) count ++
    }
    return count;
}

module.exports = countVowels;
