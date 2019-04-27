/*


Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

    Input:
        11110
        11010
        11000
        00000

    Output: 1

Example 2:

    Input:
        11000
        11000
        00100
        00011

    Output: 3

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let visited = Array(rows).fill(false).map(_ => Array(cols).fill(false));
    let islands = 0;

    let numIslandsSearch = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col]) return;
        if (grid[row][col] == "0") return;

        visited[row][col] = true;

        numIslandsSearch(row + 1, col);
        numIslandsSearch(row - 1, col);
        numIslandsSearch(row, col + 1);
        numIslandsSearch(row, col - 1);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == "1" && !visited[row][col]) {
                islands++;
                numIslandsSearch(row, col);
            }
        }
    }


    return islands;
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]));

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]));