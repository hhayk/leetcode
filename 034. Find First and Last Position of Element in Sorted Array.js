/*

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]

Example 2:

    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let len = nums.length;
    let left = 0;
    let right = len;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let mi = nums[mid];
        if (mi < target) left = mid + 1;
        else if (mi > target) right = mid;
        else {
            let si = mid;
            let ei = mid;
            while (si > 0 && nums[si - 1] == target) si--;
            while (ei < len && nums[ei + 1] == target) ei++;

            return [si, ei];
        }
    }

    return [-1, -1];
};

console.log(searchRange([1], 1));
console.log(searchRange([5, 7, 7, 8, 8, 10], 5));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));