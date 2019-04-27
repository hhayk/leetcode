/*

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
    Input:nums = [1,1,1], k = 2
    Output: 2

    Note:
        The length of the array is in range [1, 20,000].
        The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let map = new Map();
    let sum = 0;
    let ret = 0;

    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let diff = sum - k;

        if (map.has(diff)) ret += map.get(diff);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return ret;
};

console.log(subarraySum([1, 1, 1], 2));