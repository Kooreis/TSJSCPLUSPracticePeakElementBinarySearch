```cpp
#include <iostream>
#include <vector>

int findPeakUtil(std::vector<int> arr, int low, int high, int n) {
    int mid = low + (high - low) / 2;

    if ((mid == 0 || arr[mid - 1] <= arr[mid]) && (mid == n - 1 || arr[mid + 1] <= arr[mid]))
        return mid;

    else if (mid > 0 && arr[mid - 1] > arr[mid])
        return findPeakUtil(arr, low, (mid - 1), n);

    else
        return findPeakUtil(arr, (mid + 1), high, n);
}

int findPeak(std::vector<int> arr, int n) {
    return findPeakUtil(arr, 0, n - 1, n);
}

int main() {
    std::vector<int> arr = {1, 3, 20, 4, 1, 0};
    int n = arr.size();
    std::cout << "Index of a peak point is " << findPeak(arr, n);
    return 0;
}
```