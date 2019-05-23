/*

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"

*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let ret = "";
    
    while (n-- > 0) {
        ret = String.fromCharCode('A'.charCodeAt() + (n % 26)) + ret;
        n = ~~(n / 26);
    }

    return ret;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));