/*

Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
Note:
The value in the given matrix is in the range of [0, 255].
The length and width of the given matrix are in the range of [1, 150].

*/

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let rows = M.length;
    let cols = M[0].length;
    let ret = Array(rows).fill(0).map(_ => Array(cols).fill(0));

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let ones = 0;
            let total = 0;

            for (let rr = row - 1; rr <= row + 1; rr++) {
                for (let cc = col - 1; cc <= col + 1; cc++) {
                    if (rr >= 0 && cc >= 0 && rr < rows && cc < cols) {
                        ones += M[rr][cc];
                        total += 1;
                    }
                }
            }

            ret[row][col] = ~~(ones / total);
        }
    }

    return ret;
};

console.log(imageSmoother(
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]
))