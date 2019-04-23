/*

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

    Input: 
    [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]
    Output: 
    [
        [1,0,1],
        [0,0,0],
        [1,0,1]
    ]

Example 2:

    Input: 
    [
        [0,1,2,0],
        [3,4,5,2],
        [1,3,1,5]
    ]
    Output: 
    [
        [0,0,0,0],
        [0,4,5,0],
        [0,3,1,0]
    ]

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let rowSet = new Set();
    let colSet = new Set();

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] == 0) {
                rowSet.add(row);
                colSet.add(col);
            }
        }
    }

    for (let col of colSet) {
        for (let row = 0; row < rows; row++) {
            matrix[row][col] = 0;
        }
    }

    for (let row of rowSet) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    return matrix;
};

console.log(setZeroes(
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]
));

console.log(setZeroes(
    [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ]
));