function wordFrequencyCounter(str) {
    const wordsArray = str.toLowerCase().split(/\W+/);
    const map = new Map();

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === '') continue;
        if (!map.has(wordsArray[i])) {
            map.set(wordsArray[i], 1)
        } else if (map.has(wordsArray[i])) {
            map.set(wordsArray[i], map.get(wordsArray[i]) + 1)
        }
    }
    return map;
}

module.exports = wordFrequencyCounter;
