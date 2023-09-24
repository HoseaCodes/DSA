# Common Problems

## Reverse String

### Explanation

- Create a variable called `reversed` and set it equal to an empty string.
- Create a for loop that starts at the last index of `str` and decrements by 1 until it reaches 0.
- Add the character at the current index to the `reversed` variable.
- Return the `reversed` variable.


## Palindrome

### Explanation

- Set up new variable called `palindrome` and set it equal to an empty string
- Remove an characters that are not 0 - 9 or a - z.
- Iterate through the input string backwards
- As you iterate through the input string you add to the `palindrome`
- Return a teranry checking if the input string is equal to the `palindrome` variable
 

# Remove Duplicates From Array


### Explanation

- Create a new array called `uniqueArr`.
- Create a `for` loop that will loop through each element in the array and check if the current element is in `uniqueArr`.
- If it is not, we push it into `uniqueArr`.
- Once we have looped through the entire array, we return `uniqueArr`.
