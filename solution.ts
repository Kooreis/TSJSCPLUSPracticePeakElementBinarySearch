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