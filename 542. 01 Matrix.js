/*

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.

*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let ret = Array(rows).fill(0).map(_ => Array(cols).fill(0));

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let u = matrix[row - 1][col] || 0;
            let d = matrix[row + 1][col] || 0;
            let l = matrix[row][col - 1] || 0;
            let r = matrix[row][col + 1] || 0;
            ret = matrix[row][col]
        }
    }

    return ret;
};

console.log(updateMatrix(
    [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ]
))
console.log(updateMatrix(
    [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ]
))