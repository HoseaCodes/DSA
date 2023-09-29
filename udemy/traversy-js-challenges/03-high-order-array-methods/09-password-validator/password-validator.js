function validatePassword(password) {
    if (password.length < 8) return false;
    let uppercase = false;
    let lowercase = false;
    let digit = false;
    for (let i = 0; i < password.length; i++) {
        if (Number.isInteger(parseInt(password[i]))) {
            digit = true
            console.log(password[i], {digit})
        } else {
            if (password[i] === password[i].toUpperCase()) {
                uppercase = true
                console.log(password[i], {uppercase})
            }
            if (password[i] === password[i].toLowerCase()) {
                console.log(password[i], {lowercase})
                lowercase = true
            }
        }
    }
    console.log(uppercase, lowercase, digit)
    return uppercase && lowercase && digit ? true : false;
}

module.exports = validatePassword;
