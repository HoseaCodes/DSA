# For Loop

```js
  // Loop through the string
  for (let i = 0; i < string.length; i++) {
    // If the current character is the same as the character we're looking for, increment the count
    if (str[i] === char) {
      count++;
    }
  }
```

```js
    // Looping backwards through a string
    let reversedString = "";
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + str[i];
    }
```