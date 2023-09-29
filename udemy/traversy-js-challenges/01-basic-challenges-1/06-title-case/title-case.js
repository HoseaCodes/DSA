function titleCase(str) {
    str = str.split("");
    str[0] = str[0].toUpperCase();
    for (let i = 1; i < str.length - 1; i++) {
        if (str[i - 1] === " ") {
            str[i] = str[i].toUpperCase();
        } else {
            str[i] = str[i].toLowerCase();
        }
    }
    return str.join("");
}

module.exports = titleCase;
