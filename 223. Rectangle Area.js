/*

Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area

Example:

Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45
Note:

Assume that the total area is never beyond the maximum possible value of int.

*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
    let isRectangleOverlap = (rec1, rec2) => {
        let bool = rec1[2] <= rec2[0] || rec1[3] <= rec2[1] || rec1[0] >= rec2[2] || rec1[1] >= rec2[3];
        return !bool;
    }

    let area1 = (C - A) * (D - B);
    let area2 = (G - E) * (H - F);

    let area3 = 0;
    if (isRectangleOverlap([A, B, C, D], [E, F, G, H])) {
        let xs = [A, C, E, G].sort((a, b) => a - b);
        let ys = [B, D, F, H].sort((a, b) => a - b);
        area3 = (xs[2] - xs[1]) * (ys[2] - ys[1]);
    }

    return area1 + area2 - area3;
};

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
console.log(computeArea(-2, - 2, 2, 2, 3, 3, 4, 4));