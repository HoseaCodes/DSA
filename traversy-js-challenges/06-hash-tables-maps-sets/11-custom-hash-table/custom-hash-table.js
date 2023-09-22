class HashTable {
    constructor(limit = 14) {
        this.storage = []
        this.limit = limit
    }

      // Hash function
  _hash(key, max) {
    // Initialize the hash variable to 0
    let hash = 0;
    // Iterate through the key
    for (let i = 0; i < key.length; i++) {
      // Add the character code at each iteration to the hash variable
      hash += key.charCodeAt(i);
    }
    // Return the hash modulo the max
    return hash % max;
  }

   // Insert a key-value pair into the hash table
  set(key, value) {
    // Hash the key
    const index = this._hash(key, this.limit);
    // If the index is empty, insert the key-value pair
    if (this.storage[index] === undefined) {
      // create a bucket
      this.storage[index] = [[key, value]];
    } else {
      //  If the index is not empty, iterate through the bucket (collision handling)
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        // If the key exists, update the value
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      // If the key does not exist, insert the key-value pair
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }


    // Print all keys/values in the table
   printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i} Empty`);
      }
    }
  }
}

module.exports = HashTable;
