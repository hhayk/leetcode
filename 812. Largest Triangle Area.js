/*

You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.

Example:
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2
Explanation: 
The five points are show in the figure below. The red triangle is the largest.


Notes:

3 <= points.length <= 50.
No points will be duplicated.
 -50 <= points[i][j] <= 50.
Answers within 10^-6 of the true value will be accepted as correct.

*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let area = ([p1x, p1y], [p2x, p2y], [p3x, p3y]) => 0.5 * Math.abs(p1x * p2y + p2x * p3y + p3x * p1y - p1y * p2x - p2y * p3x - p3y * p1x);

    let max = 0;
    let len = points.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                max = Math.max(max, area(points[i], points[j], points[k]));
            }
        }
    }
    return max;
};

console.log(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]));
console.log(largestTriangleArea([[1, 0], [0, 0], [0, 1]]));