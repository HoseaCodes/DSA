function isPalindrome(str) {
    let palindrome = "";
    str = str.replace(/[^0-9a-z]/gi, '') 
    for (let i = str.length - 1; i >= 0; i--) {
        palindrome = palindrome + str[i];
    }
    return str.toLowerCase() == palindrome.toLowerCase() ? true : false ;
}

// Programtically without regular expressions
function isPalindrome2(str) {
    const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
    let palindrome = ""
    for (let i = formattedStr.length - 1; i >= 0; i--) {
        palindrome = palindrome + formattedStr[i];
    }
    return formattedStr == palindrome ? true : false;
}


function removeNonAlphaNumeric(string) {
    let formattedStr = '';
    for(let i = 0; i < string.length; i++) {
        const char = string[i];
        if(isAlphaNumeric(char)) {
            formattedStr += char;
        }
    }
    return formattedStr;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <=57) // numeric (0..9)
        ||   ((code >= 97 && code <= 122))// lower alpha a to z
    )
}

module.exports = isPalindrome;
