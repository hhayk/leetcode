/*

Given a collection of intervals, merge all overlapping intervals.

Example 1:

    Input: [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: 
        Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

    Input: [[1,4],[4,5]]
    Output: [[1,5]]
    Explanation: 
        Intervals [1,4] and [4,5] are considered overlapping.

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        let a0 = a[0];
        let b0 = b[0];
        return a0 < b0 ? - 1 : a0 == b0 ? 0 : 1;
    });

    let arr = [];
    for (let interval of intervals) {
        if (arr.length == 0 || arr[arr.length - 1][1] < interval[0]) arr.push(interval);
        else arr[arr.length - 1][1] = Math.max(arr[arr.length - 1][1], interval[1]);
    }

    return arr;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));