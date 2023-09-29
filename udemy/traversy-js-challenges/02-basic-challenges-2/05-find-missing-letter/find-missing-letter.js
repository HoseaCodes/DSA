function findMissingLetter(arr) {

  // Create a string of the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Find the index of the first letter in the array in the alphabet string
  const startIndex = alphabet.indexOf(arr[0]);

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current letter in the array is not the same as the current letter 
    // in the alphabet string, return the current letter in the alphabet string
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  // If no letter is missing, return an empty string
  return '';
}
findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z'])

module.exports = findMissingLetter;
