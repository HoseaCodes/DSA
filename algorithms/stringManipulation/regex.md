# Regex

## Replace any value this is not 0 - 9 or a - z with and empty string
```js
    string.replace(/[^0-9a-z]/gi, '') 
```

##  Check if strinf equals a, e, i, o, or u 
```js
 if (/[aeiou]/i.test(string[i]))
```