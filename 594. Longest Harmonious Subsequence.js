/*

We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:
    Input: [1,3,2,2,5,2,3,7]
    Output: 5
    Explanation: 
        The longest harmonious subsequence is [3,2,2,2,3].
        Note: The length of the input array will not exceed 20,000.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let map = new Map();
    let res = 0;

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.has(num + 1)) res = Math.max(res, map.get(num) + map.get(num + 1));
        if (map.has(num - 1)) res = Math.max(res, map.get(num) + map.get(num - 1));
    }

    return res;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));