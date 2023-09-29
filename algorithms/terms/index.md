# Terms

## Subarray or Substring

A subarray or substring is a contiguous section of an array or string.

    Think about a sliding window. Note that not all problems with these characteristics should be solved with a sliding window, and not all sliding window problems have these characteristics. These characteristics should only be used as a general guideline.

    If a problem's input is an integer array and you find yourself needing to calculate multiple subarray sums, consider building a prefix sum.

## Subsequences

A subsequence is a set of elements of an array/string that keeps the same relative order but doesn't need to be contiguous.

For example, subsequences of [1, 2, 3, 4] include: [1, 3], [4], [], [2, 3], but not [3, 2], [5], [4, 1].

    Dynamic programming is used to solve a lot of subsequence problems.

    From the patterns we have learned so far, the most common one associated with subsequences is two pointers when two input arrays/strings are given (we did look at one problem in the two pointers articles involving subsequences). Because prefix sums and sliding windows represent subarrays/substrings, they are not applicable here.


## Subsets

A subset is any set of elements from the original array or string. The order doesn't matter and neither do the elements being beside each other. For example, given [1, 2, 3, 4], all of these are subsets: [3, 2], [4, 1, 2], [1]. Note: subsets that contain the same elements are considered the same, so [1, 2, 4] is the same subset as [4, 1, 2].

    You may be thinking, what is the difference between subsequences and subsets if subsets with the same elements are considered the same? In subsequences, the order matters - let's say you had an array of integers and you needed to find a subsequence with 3 consecutive elements (like 1, 2, 3). This would be harder than finding a subset with 3 consecutive elements because, with a subset, the 3 elements simply need to exist. In a subsequence, the elements need to exist in the correct relative order.

    One thing to note is that if a problem involves subsequences, but the order of the subsequence doesn't actually matter (let's say it wants the sum of subsequences), then you can treat it the same as a subset. A useful thing that you can do when dealing with subsets that you can't do with subsequences is that you can sort the input, since the order doesn't matter.


## Pangram

A pangram is a sentence where every letter of the English alphabet appears at least once.

