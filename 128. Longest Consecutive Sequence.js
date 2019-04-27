/*

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

    Input: [100, 4, 200, 1, 3, 2]
    Output: 4
    Explanation: 
        The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            let curr = num;
            let long = 1;

            while (set.has(++curr)) long++;

            longest = Math.max(longest, long);
        }
    }

    return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0]))