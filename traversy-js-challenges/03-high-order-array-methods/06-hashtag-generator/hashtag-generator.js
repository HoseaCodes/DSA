function generateHashtag(str) {
    if (str.length > 140 || str.length <= 0) return false;
    let hash = str.split(" ")
    for (let i = 0; i < hash.length; i++) {
        if (hash[i]) {   
            hash[i] = capitalizeFirstLetter(hash[i])
        }
    }
    hash.unshift("#")
    return hash.join("")
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// Write a function called `generateHashtag` that takes a string as input 
// and returns a hashtag-generated string according to the rules below. 
//If the generated hashtag string is longer than 140 characters or 
//the input/result is an empty string, the function should return `false`.


module.exports = generateHashtag;
