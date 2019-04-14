/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4

Example 2:

    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length;
    let lv = Math.abs(target - nums[0]);
    let rv = Math.abs(target - nums[len - 1]);

    if (lv <= rv) {
        let diff = Number.MAX_VALUE;
        let li = 0;
        while (li < len) {
            let newDiff = target - nums[li];
            if (newDiff == 0) return li;
            else if (newDiff > diff) return -1;
            else newDiff = diff;

            li++;
        }
    } else {
        let diff = Number.MIN_VALUE;
        let li = len - 1;
        while (li > 0) {
            let newDiff = nums[li] - target;
            if (newDiff == 0) return li;
            else if (newDiff < diff) return -1;
            else newDiff = diff;

            li--;
        }
    }

    return -1; 
};

console.log(search([1], 1));
console.log(search([1, 3], 1));
console.log(search([1, 3], 3));
console.log(search([4, 5, 6, 7, 0, 1, 2], 8));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));