/*

Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

    Input: [1,2,2]
    Output:
    [
        [2],
        [1],
        [1,2,2],
        [2,2],
        [1,2],
        []
    ]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let ret = new Map();

    let subsetsWithDupRec = (idx, maxSize, tmp) => {
        if (tmp.length === maxSize) {
            let res = tmp.slice();
            ret.set(JSON.stringify(res), res);
            return;
        }

        for (let i = idx; i < nums.length; i++) {
            tmp.push(nums[i]);
            subsetsWithDupRec(i + 1, maxSize, tmp);
            tmp.pop();
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        subsetsWithDupRec(0, i, []);
    }

    return [...ret.values()];
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([4, 4, 4, 1, 4]));