/*

Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.
Example 1:
Input: ["23:59","00:00"]
Output: 1
Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.

*/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let min = Number.MAX_VALUE;
    let arr = timePoints.map(time => {
        let t2 = time.split(":").map(s => Number(s));
        return 60 * t2[0] + t2[1];
    });

    arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i - 1]);
    }

    let edge = arr[0] + (24 * 60 - arr[arr.length - 1]);
    return Math.min(min, edge);
};

console.log(findMinDifference(["12:12", "00:13"]));
console.log(findMinDifference(["23:59", "00:00"]));