/*


Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

    [[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]
    Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

Example 2:

    [[0,0,0,0,0,0,0,0]]
    Given the above grid, return 0.

Note: The length of each dimension in the given grid does not exceed 50.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let visited = Array(rows).fill(false).map(_ => Array(cols).fill(false));
    let max = 0;

    let findIsland = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col]) return 0;

        visited[row][col] = true;
        return grid[row][col] == 1 ?
            1 + findIsland(row + 1, col) + findIsland(row - 1, col) + findIsland(row, col + 1) + findIsland(row, col - 1)
            : 0;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (visited[row][col]) continue;

            let area = findIsland(row, col);
            max = Math.max(max, area);
        }
    }

    return max;
};

console.log(maxAreaOfIsland(
    [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ]
))
console.log(maxAreaOfIsland(
    [
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]
))