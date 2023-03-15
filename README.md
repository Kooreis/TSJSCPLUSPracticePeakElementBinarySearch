# Question: How do you find a peak element in an array using binary search? JavaScript Summary

The JavaScript code provided defines a function, `findPeakElement`, which is designed to find a peak element in an array using binary search. A peak element is an element that is greater than its neighbors. The function takes an array of numbers as an argument and returns the index of a peak element. The function begins by defining two pointers, `left` and `right`, which initially point to the start and end of the array respectively. The function then enters a loop, which continues until the `left` pointer is no longer less than the `right` pointer. Within this loop, a `mid` point is calculated as the floor of the average of `left` and `right`. If the value at the `mid` index of the array is less than the value at the next index (`mid + 1`), the `left` pointer is moved to `mid + 1`. If not, the `right` pointer is moved to `mid`. This effectively halves the search space with each iteration of the loop, implementing a binary search. When the loop ends (when `left` is no longer less than `right`), the function returns the `left` pointer, which will be the index of a peak element. The function is then tested with two example arrays.

---

# TypeScript Differences

The TypeScript version solves the problem in a similar way to the JavaScript version, but with a few key differences:

1. Use of Classes: The TypeScript version uses a class `PeakElementFinder` to encapsulate the logic for finding the peak element. This is a feature of TypeScript (and modern JavaScript) that allows for better organization and encapsulation of related functionality.

2. Static Methods: The `findPeakElement` and `search` methods are declared as static, meaning they belong to the class itself rather than instances of the class. This is a feature of TypeScript (and modern JavaScript) that allows for methods to be called directly on the class, without needing to create an instance of the class.

3. Type Annotations: The TypeScript version uses type annotations (`nums: number[]`, `l: number`, `r: number`) to specify the types of the parameters. This is a feature of TypeScript that provides static typing, which can help catch errors at compile time rather than at runtime.

4. Recursion: The TypeScript version uses recursion in the `search` method to perform the binary search, whereas the JavaScript version uses a while loop. This is not a difference in language features, but rather a difference in approach to solving the problem.

5. Private Methods: The `search` method is declared as private, meaning it can only be accessed within the `PeakElementFinder` class. This is a feature of TypeScript that provides better encapsulation and control over access to methods and properties.

Overall, the TypeScript version provides better type safety, encapsulation, and organization of code compared to the JavaScript version.

---

# C++ Differences

The C++ version of the solution also finds a peak element in an array using binary search, but it does so in a slightly different way than the JavaScript version. 

The C++ version uses a helper function `findPeakUtil` that takes an array, a low index, a high index, and the size of the array as input. This function calculates the middle index and checks if the element at the middle index is a peak element. If it is, the function returns the middle index. If it's not, the function recursively calls itself with a new range of indices to search. If the element at the middle index is less than the element to its left, the function searches the left half of the array. Otherwise, it searches the right half of the array.

The main function `findPeak` simply calls `findPeakUtil` with the entire range of indices in the array. The `main` function then tests `findPeak` with an example array and prints the result.

The main differences between the C++ and JavaScript versions are:

1. The C++ version uses recursion to perform the binary search, while the JavaScript version uses a while loop.
2. The C++ version checks both the left and right neighbors of the middle element to determine if it's a peak element, while the JavaScript version only checks the right neighbor.
3. The C++ version uses the `std::vector` class to store the array of numbers, while the JavaScript version uses a native array.
4. The C++ version uses the `std::cout` object to print the result, while the JavaScript version uses the `console.log` function.
5. The C++ version uses the `size` method of the `std::vector` class to get the size of the array, while the JavaScript version uses the `length` property of the array.

---
