/*

Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let k = -1;
    while (Math.pow(3, ++k) < n);
    return Math.pow(3, k) == n;
};

console.log(isPowerOfThree(1));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));