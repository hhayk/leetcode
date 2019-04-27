/*

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

    Input: 3
    Output:
    [
        [ 1, 2, 3 ],
        [ 8, 9, 4 ],
        [ 7, 6, 5 ]
    ]

*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let ans = Array(n).fill(0).map(_ => Array(n).fill(0));
    let r1 = 0;
    let r2 = n - 1;
    let c1 = 0;
    let c2 = n - 1;

    let k = 1;
    while (r1 <= r2 && c1 <= c2) {
        for (let c = c1; c <= c2; c++) ans[r1][c] = k++;
        for (let r = r1 + 1; r <= r2; r++) ans[r][c2] = k++;
        if (r1 < r2 && c1 < c2) {
            for (let c = c2 - 1; c > c1; c--) ans[r2][c] = k++;
            for (let r = r2; r > r1; r--) ans[r][c1] = k++;
        }

        r1++;
        r2--;
        c1++;
        c2--;
    }

    return ans;
};

console.log(generateMatrix(3));