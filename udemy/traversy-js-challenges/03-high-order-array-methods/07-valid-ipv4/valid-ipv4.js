const isValidIPv4 = (str) => {
    let ip = str.split(".")
    if (ip.length !== 4) return false
    for (let i = 0; i < ip.length; i++) {
        if (ip[i] > 255 || ip[i][0] <=0) return false
    }
    return true
};

module.exports = isValidIPv4;
