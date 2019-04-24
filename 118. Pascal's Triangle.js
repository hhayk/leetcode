/*

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [];

    for (let i = 0; i < numRows; i++) {
        let tmp = Array(i + 1).fill(1);
        if (i >= 2) {
            for (let j = 1; j < tmp.length - 1; j++) {
                tmp[j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
        arr.push(tmp);
    }

    return arr;
};

console.log(generate(5));