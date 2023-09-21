function permutations(str) {
    let res = [];

    if (str.length === 0) {
        res.push('');
        return res;
    }

    for (let i = 0; i < str.length; i++) {
        const firstChar = str[i]
        const restOfStr = str.slice(0, i) + str.slice(i + 1);
        const subPermutations = permutations(restOfStr);

        for (let j = 0; j < subPermutations.length; j++) {
            res.push(firstChar + subPermutations[j])
        }
    }

    return res;
}

module.exports = permutations;
