// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let num = ''
    let str = Math.abs(n).toString();
    debugger;
    for (let i =  str.length - 1; i >= 0; i--) {
        num += str[i] 
    }
    return parseInt(Math.sign(n) * num);
}
reverseInt(-90)
module.exports = reverseInt;
