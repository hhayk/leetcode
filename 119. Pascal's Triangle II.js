/*

Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

    Input: 3
    Output: [1,3,3,1]

Follow up:

Could you optimize your algorithm to use only O(k) extra space?

*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let arr = [];

    for (let i = 0; i < rowIndex + 1; i++) {
        let tmp = Array(i + 1).fill(1);
        if (i >= 2) {
            for (let j = 1; j < tmp.length - 1; j++) {
                tmp[j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
        arr.push(tmp);
    }

    return arr[rowIndex];
};

console.log(getRow(3));