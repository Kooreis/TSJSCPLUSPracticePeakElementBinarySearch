class PeakElementFinder {
    static findPeakElement(nums: number[]): number {
        return this.search(nums, 0, nums.length - 1);
    }
}