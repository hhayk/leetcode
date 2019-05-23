/*

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:  

1 is typically treated as an ugly number.
n does not exceed 1690.

*/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let idx = [0, 0, 0];
    let ugly = Array(n).fill(1);
    let k = 1;

    while (k < n) {
        let u1 = ugly[idx[0]] * 2;
        let u2 = ugly[idx[1]] * 3;
        let u3 = ugly[idx[2]] * 5;

        ugly[k] = Math.min(u1, u2, u3);
        if (ugly[k] == u1) idx[0]++;
        if (ugly[k] == u2) idx[1]++;
        if (ugly[k] == u3) idx[2]++;
        k++;
    }

    return ugly[n - 1];
};

console.log(nthUglyNumber(10));