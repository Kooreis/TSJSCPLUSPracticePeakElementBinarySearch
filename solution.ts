Here is a TypeScript solution for finding a peak element in an array using binary search:

```typescript
class PeakElementFinder {
    static findPeakElement(nums: number[]): number {
        return this.search(nums, 0, nums.length - 1);
    }

    private static search(nums: number[], l: number, r: number): number {
        if (l == r) {
            return l;
        }
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return this.search(nums, l, mid);
        }
        return this.search(nums, mid + 1, r);
    }
}

let nums = [1, 2, 3, 1];
console.log(PeakElementFinder.findPeakElement(nums));
```

This program defines a class `PeakElementFinder` with a static method `findPeakElement` that takes an array of numbers and returns the index of a peak element. The `search` method is a helper method that performs the binary search. It takes the array, a left index, and a right index, and recursively searches for a peak element. If the middle element is greater than the next element, it searches the left half of the array; otherwise, it searches the right half. The program then tests the `findPeakElement` method with an example array and logs the result to the console.