/*

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let stack = [];
    let rows = grid.length;
    let cols = grid[0].length;
    let zeros = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == 2) stack.push([row, col]);
            if (grid[row][col] == 0) zeros++;
        }
    }

    if (zeros == rows * cols) return 0;

    let tick = 0;
    while (stack.length) {
        let tmp = stack.slice();
        while (tmp.length) {
            let [row, col] = tmp.shift();
            stack.shift();

            if (row + 1 < rows && grid[row + 1][col] == 1) {
                stack.push([row + 1, col]);
                grid[row + 1][col] = 2;
            }
            if (row - 1 >= 0 && grid[row - 1][col] == 1) {
                stack.push([row - 1, col]);
                grid[row - 1][col] = 2;
            }
            if (col + 1 < cols && grid[row][col + 1] == 1) {
                stack.push([row, col + 1]);
                grid[row][col + 1] = 2;
            }
            if (col - 1 >= 0 && grid[row][col - 1] == 1) {
                stack.push([row, col - 1]);
                grid[row][col - 1] = 2;
            }
        }
        tick++;
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == 1) return -1;
        }
    }

    return tick - 1;
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));
console.log(orangesRotting([[0, 2]]));
console.log(orangesRotting([[0]]));
console.log(orangesRotting([[1]]));