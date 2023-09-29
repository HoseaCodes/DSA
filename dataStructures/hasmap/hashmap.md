#  Hashing 

A hash function is a function that takes an input and deterministically converts it to an integer that is less than a fixed size set by the programmer. Inputs are called keys and the same input will always be converted to the same integer. 

We know that arrays have O(1) random access. Given an arbitrary index, we can access and update its value in the array in constant time. The main constraint with arrays is that they are a fixed size, and the indices have to be integers. Because hash functions can convert any input into an integer, we can effectively remove the constraint of indices needing to be integers. When a hash function is combined with an array, it creates a hash map, also known as a hash table or dictionary.

A hash map is probably the most important concept in all of algorithm interviewing. It is extremely powerful and allows you to reduce the time complexity of an algorithm by a factor of O(n) for a huge amount of problems.

To summarize, a hash map is an unordered data structure that stores key-value pairs. A hash map can add and remove elements in O(1), as well as update values associated with a key and check if a key exists, also in O(1). You can iterate over both the keys and values of a hash map, but the iteration won't necessarily follow any order (there are many implementations and this is language dependent for the built-in types).

    An ordered data structure is one where the insertion order is "remembered". An unordered data structure is one where the insertion order is not relevant.

