/*

Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

    Input: dividend = 10, divisor = 3
    Output: 3

Example 2:

    Input: dividend = 7, divisor = -3
    Output: -2

Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    let sign = dividend > 0 ^ divisor > 0;
    let cnt = 0;
    dividend = Math.abs(dividend);

    let divideRec = (d, q) => {
        if (dividend > d) {
            divideRec(d + d, q + q);
        }
        if (dividend >= d) {
            dividend -= d;
            cnt += q;
        }
    }
    divideRec(Math.abs(divisor), 1);

    return sign ? -cnt : cnt;
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(-7, -3));
console.log(divide(2147483647, 1));