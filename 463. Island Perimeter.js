/*

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example:

    Input:
    [[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]

    Output: 16

    Explanation: The perimeter is the 16 yellow stripes in the image below:

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let ret = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == 1) {
                let possibleEdges = 4;

                if (row - 1 >= 0 && grid[row - 1][col] == 1) possibleEdges--;
                if (row + 1 < rows && grid[row + 1][col] == 1) possibleEdges--;
                if (col - 1 >= 0 && grid[row][col - 1] == 1) possibleEdges--;
                if (col + 1 < cols && grid[row][col + 1] == 1) possibleEdges--;

                ret += possibleEdges;
            }
        }
    }

    return ret;
};

{
    let grid = [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]
    ]
    console.log(islandPerimeter(grid));
}