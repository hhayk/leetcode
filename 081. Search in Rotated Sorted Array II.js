/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let nl = nums[left];
        let nm = nums[mid];
        let nr = nums[right];

        if (nm == target) return true;

        if (nl == nm && nr == nm) {
            left++;
            right--;
        } else if (nl <= nm) {
            if (target >= nl && target < nm) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nm && target <= nr) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));