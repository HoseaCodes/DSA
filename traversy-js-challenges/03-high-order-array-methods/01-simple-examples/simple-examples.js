/**
   Higher Order Functions

 * A “higher-order function” is a function that accepts 
 * functions as parameters and/or returns a function.
 */

const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubleNumbers = numbers.map((num, index, array) => {
    console.log(index)
    console.log(array)
    return num * 2; // return the number multiplied by two (doubled).
})

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

// Will create a new array with the conditions meet
const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

// Total starts at zero
// First argument is the parameter 
// Second argument is the index from the array
const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0)

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

// shorthand for for-loop without index
numbers.forEach((num) => {
    console.log(num)
})


 /**
 * find: Returns the first array element that satisfies a specified condition.
 */

 const foundNumber = numbers.find((num) => num > 2);


/**
 * some: Checks if at least one array element satisfies a condition.
 */

// Will return true or false
const hasEventNumber = numbers.some((num) => num % 2 === 0);

/**
 * every: Checks if all array elements satisfy a condition.
 */

// Will return true or false
const allNumsGreaterThanZero = numbers.every((num) => num > 0);
