function sumUpTo(num) {
    if (num === 1) {
        // console.log(`edge case - sumUpTo(${num}) return 1`)
        return 1
    }
    // console.log(`sumUpTo(${num}) calls sumUpTo(${num - 1}) + ${num}`)
    // const res = num + sumUpTo(num - 1);
    // console.log(`sumUpTo(${num}) return ${res}`)
    // return res
    return num + sumUpTo(num - 1);
}

module.exports = sumUpTo;
