/*

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

 

Example 1:

Input: [1,2,3,4]
Output: "23:41"
Example 2:

Input: [5,5,5,5]
Output: ""

*/

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {
    let permute = (arr, idx, permutes) => {
        if (idx == A.length) {
            permutes.push(arr.slice(0));
            return permutes;
        } else {
            for (let i = idx; i < A.length; i++) {
                [arr[i], arr[idx]] = [arr[idx], arr[i]];
                permute(arr, idx + 1, permutes);
                [arr[i], arr[idx]] = [arr[idx], arr[i]];
            }
            return permutes;
        }
    }
    let max = -1;
    permute(A, 0, []).forEach(arr => {
        let hs = 10 * arr[0] + arr[1];
        let ms = 10 * arr[2] + arr[3];
        if (hs < 24 && ms < 60) {
            max = Math.max(max, hs * 60 + ms);
        }
    });

    if (max == -1) return "";
    else {
        let hh = ~~(max / 60);
        let mm = max % 60;

        let shh = hh <= 9 ? "0" + hh : hh;
        let smm = mm <= 9 ? "0" + mm : mm;
        return shh + ":" + smm;
    }
};

console.log(largestTimeFromDigits([0, 0, 0, 0]));
console.log(largestTimeFromDigits([1, 2, 3, 4]));
console.log(largestTimeFromDigits([5, 5, 5, 5]));