/*

In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

Example 1:

    Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
    Output: 2
    Explanation: 
        The first figure represents the dominoes as given by A and B: before we do any rotations.
        If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Example 2:

    Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
    Output: -1
        Explanation: 
        In this case, it is not possible to rotate the dominoes to make one row of values equal.

*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
    if (A.length != B.length) return -1;

    let cntA = Array(7).fill(0);
    let cntB = Array(7).fill(0);
    let same = Array(7).fill(0);
    for (let i = 0; i < A.length; i++) {
        let ai = A[i];
        let bi = B[i];

        cntA[ai]++;
        cntB[bi]++;
        if (ai == bi) same[ai]++;
    }

    for (let i = 1; i < 7; i++) {
        let ai = cntA[i];
        let bi = cntB[i];
        let si = same[i];
        if (ai + bi - si >= A.length) return Math.min(ai, bi) - si;
    }

    return -1;
};

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));
console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]));