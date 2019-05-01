/*

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let curry = 1;
    let i = digits.length;

    while (--i >= 0) {
        let sum = digits[i] + curry;
        digits[i] = sum % 10;
        curry = Math.floor(sum / 10);
    }
    if (curry > 0) digits.unshift(curry);

    return digits;
};

console.log(plusOne([9]));
console.log(plusOne([0]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));