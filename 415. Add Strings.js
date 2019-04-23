/*

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer direct

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length - 1;
    let len2 = num2.length - 1;
    let ret = "";

    let curry = 0;
    while (len1 >= 0 || len2 >= 0) {
        let n1 = Number(num1.charAt(len1) || '0');
        let n2 = Number(num2.charAt(len2) || '0');
        let sum = n1 + n2 + curry;

        ret = (sum % 10) + ret;
        curry = Math.floor(sum / 10);
        len1--;
        len2--;
    }
    if (curry) ret = curry + ret;

    return ret;
};

console.log(addStrings("9333852702227987", "85731737104263"));