/*

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let minSize = nums.length / 3;
    let map = new Map();
    let inserted = new Set();

    for (let ni of nums) {
        map.set(ni, (map.get(ni) || 0) + 1);
        if (map.get(ni) > minSize && !inserted.has(ni)) {
            inserted.add(ni);
        }
    }

    return [...inserted];
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));