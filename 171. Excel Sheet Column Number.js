/*

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

    Input: "A"
    Output: 1

Example 2:

    Input: "AB"
    Output: 28

Example 3:

    Input: "ZY"
    Output: 701

*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let aBase = 'A'.charCodeAt(0) - 1;
    let len = s.length;

    return [...s].reduce((pv, cv, i) => {
        let num = cv.charCodeAt(0) - aBase;
        return pv + num * Math.pow(26, len - i - 1);
    }, 0);
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));