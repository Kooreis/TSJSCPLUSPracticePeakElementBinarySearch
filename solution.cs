Here is a JavaScript solution for finding a peak element in an array using binary search:

```javascript
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 5
```

This console application defines a function `findPeakElement` that takes an array of numbers as input and returns the index of a peak element. A peak element is defined as an element that is greater than its neighbors. The function uses binary search to find a peak element. The binary search is performed by dividing the array into two halves and comparing the middle element with its right neighbor. If the middle element is less than its right neighbor, the search continues in the right half of the array. Otherwise, the search continues in the left half of the array. The search ends when the left and right pointers meet, at which point the left pointer indicates the index of a peak element. The function is then tested with two example arrays.