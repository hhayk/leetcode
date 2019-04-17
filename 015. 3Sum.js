/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

    Given array nums = [-1, 0, 1, 2, -1, -4],

    A solution set is:
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let map = new Map();
    let arr = nums.sort((a, b) => a - b);
    let len = arr.length;

    for (let i = 0; i < len - 2; i++) {
        let ai = arr[i];
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            let li = arr[left];
            let ri = arr[right];
            let sum = ai + li + ri;
            if (sum < 0) left++;
            else if (sum > 0) right--;
            else {
                let temp = [ai, li, ri];
                let hash = JSON.stringify(temp);
                if (!map.has(hash)) map.set(hash, temp);
                left++;
                right--;
            }
        }
    }

    return [...map.values()];
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
