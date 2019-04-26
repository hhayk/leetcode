/*

Given a collection of distinct integers, return all possible permutations.

Example:

    Input: [1,2,3]
    Output:
    [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ret = [];
    let len = nums.length;

    let permuteRec = (reservetion, tmp) => {
        if (reservetion.length == len) {
            ret.push(tmp);
        } else {
            for (let i = 0; i < len; i++) {
                if (reservetion.indexOf(i) != -1) continue;

                permuteRec([...reservetion, i], [...tmp, nums[i]]);
            }
        }
    }

    for (let i = 0; i < len; i++) permuteRec([i], [nums[i]]);

    return ret;
};

console.log(permute([1, 2, 3]));