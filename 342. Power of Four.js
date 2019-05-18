/*

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?

*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    let i = 0;
    while (i < 16) {
        let pow = Math.pow(4, i);
        if (pow == num) return true;
        if (pow > num) return false;
        i++;
    }

    return false;
};

console.log(isPowerOfFour(0));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(64));
console.log(isPowerOfFour(65));
console.log(isPowerOfFour(17));
console.log(isPowerOfFour(9));
console.log(isPowerOfFour(5));