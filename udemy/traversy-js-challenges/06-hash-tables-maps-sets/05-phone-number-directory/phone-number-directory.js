function phoneNumberDirectory(arr) {
    const map = new Map();
    for (const phoneNumber of arr) {
        let phone = phoneNumber.split(":") 
        map.set(phone[0], phone[1])  
    }
    return map
}

module.exports = phoneNumberDirectory;
