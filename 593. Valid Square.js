/*

Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:

    Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
    Output: True

Note:

All the input integers are in the range [-10000, 10000].
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Input points have no order.

*/

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    if(new Set([p1.join(","), p2.join(","), p3.join(","), p4.join(",")]).size != 4) return false;

    let set = new Set();
    let points = [p1, p2, p3, p4];
    let ways = [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]];

    let dist = (a, b) => Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);

    for (let way of ways) {
        set.add(dist(points[way[0]], points[way[1]]));
        set.add(dist(points[way[1]], points[way[2]]));
        set.add(dist(points[way[0]], points[way[2]]));
    }

    return set.size == 2;
};

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]));
console.log(validSquare([0, 0], [0, 0], [1, 0], [0, 1]));