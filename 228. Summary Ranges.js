/*

Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

    Input:  [0,1,2,4,5,7]
    Output: ["0->2","4->5","7"]
    Explanation: 
        0,1,2 form a continuous range; 4,5 form a continuous range.

Example 2:

    Input:  [0,2,3,4,6,8,9]
    Output: ["0","2->4","6","8->9"]
    Explanation:
        2,3,4 form a continuous range; 8,9 form a continuous range.

*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length == 0) return [];

    let make = (si, ei, acc) => ei - si == 1 ? [...acc, `${nums[si]}`] : [...acc, `${nums[si]}->${nums[ei - 1]}`];
    let summaryRangesRec = (si, ei, acc) => {
        return (ei == nums.length) ?
            make(si, ei, acc) :
            nums[ei - 1] + 1 == nums[ei] ? summaryRangesRec(si, ei + 1, acc) : summaryRangesRec(ei, ei + 1, make(si, ei, acc));
    }

    return summaryRangesRec(0, 1, []);
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));