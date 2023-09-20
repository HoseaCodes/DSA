function validateEmail(email) {
    if (email.indexOf('@') === -1) {
        return false
    } 

    const [local, domain] = email.split('@')
    if (local.length === 0 || domain.length < 3) {
        return false;
    }

    const domainExt = domain.split('.');
    if (domainExt.length < 2 || domainExt[1] < 2) {
        return false
    }

    return true
}

module.exports = validateEmail;
