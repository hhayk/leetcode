/*

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

    Input:
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
    Output: [1,2,3,6,9,8,7,4,5]

Example 2:

    Input:
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9,10,11,12]
    ]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length == 0) return [];

    let ans = [];
    let r1 = 0;
    let r2 = matrix.length - 1;
    let c1 = 0;
    let c2 = matrix[0].length - 1;

    while (r1 <= r2 && c1 <= c2) {
        for (let c = c1; c <= c2; c++) ans.push(matrix[r1][c]);
        for (let r = r1 + 1; r <= r2; r++) ans.push(matrix[r][c2]);
        if (r1 < r2 && c1 < c2) {
            for (let c = c2 - 1; c > c1; c--) ans.push(matrix[r2][c]);
            for (let r = r2; r > r1; r--) ans.push(matrix[r][c1]);
        }

        r1++;
        r2--;
        c1++;
        c2--;
    }

    return ans;
};

console.log(spiralOrder(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
))

console.log(spiralOrder(
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ]
))