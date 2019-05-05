/*

A boomerang is a set of 3 points that are all distinct and not in a straight line.

Given a list of three points in the plane, return whether these points are a boomerang.

 

Example 1:

Input: [[1,1],[2,3],[3,2]]
Output: true
Example 2:

Input: [[1,1],[2,2],[3,3]]
Output: false

*/

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    let [ax, ay] = points[0];
    let [bx, by] = points[1];
    let [cx, cy] = points[2];

    return ax * (by - cy) + bx * (cy - ay) + cx * (ay - by) != 0;
};

console.log(isBoomerang([[1, 1], [2, 3], [3, 2]]))