/*

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

    Input:
    matrix = [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ]
    target = 3
    Output: true

Example 2:

    Input:
    matrix = [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ]
    target = 13
    Output: false

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length == 0) return false;

    let rows = matrix.length;
    let cols = matrix[0].length;

    let bottom = 0;
    let top = rows;
    while (bottom < top) {
        let colMid = Math.floor((bottom + top) / 2);
        let row = matrix[colMid];

        if (target > row[cols - 1]) bottom = colMid + 1;
        else if (target < row[0]) top = colMid;
        else {
            let left = 0;
            let right = cols;
            while (left < right) {
                let rowMid = Math.floor((left + right) / 2);
                if (target > row[rowMid]) left = rowMid + 1;
                else if (target < row[rowMid]) right = rowMid;
                else return true;
            }
            return false;
        }
    }

    return false;
};

console.log(searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 50
))

console.log(searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 13
))