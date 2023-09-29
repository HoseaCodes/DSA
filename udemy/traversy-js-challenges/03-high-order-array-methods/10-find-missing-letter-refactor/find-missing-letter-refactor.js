function findMissingLetter(arr) {
    // `start` is the character code of the first character in the array
  let start = arr[0].charCodeAt(0);
  // `missingCharCode` is the character code of the missing character
  const missingCharCode = arr
    .map((char) => char.charCodeAt(0)) // convert each character to its character code
    // find the first character code that is not one more than the previous character code
    .find((current) => {
      //  if the current character code is more than one greater than the previous character code then return true
      if (current - start > 1) {
        return true;
      }
      // otherwise set `start` to the current character code and return false
      start = current;
      return false;
    });
  // if `missingCharCode` is truthy then return the character that is one less than the character code
  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : '';
}

module.exports = findMissingLetter;
