/*

-- NOT Resolved

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length == 0) return [newInterval];

    let ret = [];
    let tmp = [];
    let overlap = false;

    for (let i = 0; i < intervals.length; i++) {
        let inter = intervals[i];
        let newInter = newInterval;

        if (overlap) {
            if (inter[0] > newInter[1]) {
                overlap = false;

                if (intervals[i - 1][1] > newInter[1]) tmp.push(intervals[i - 1][1]);
                else tmp.push(newInter[1]);

                ret.push(tmp);
                tmp = [];

                ret.push(inter);
            }
        } else {
            if (inter[1] >= newInter[0]) {
                overlap = true;
                tmp.push(inter[0]);
            } else {
                ret.push(inter);
            }
        }
    }

    // console.log(ret)
    return ret;
};

console.log(insert([], [5, 7]));
console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));