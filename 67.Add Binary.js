/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

    Input: a = "11", b = "1"
    Output: "100"

Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let euqalLength = (a, b) => {
        if (a.length < b.length) while (a.length < b.length) a = '0' + a;
        else while (b.length < a.length) b = '0' + b;
        return [a, b];
    }

    let res = "";
    let [s1, s2] = euqalLength(a, b);
    let len = s1.length;
    let curry = 0;
    for (let i = 0; i < len; i++) {
        let v1 = Number(s1[len - i - 1]);
        let v2 = Number(s2[len - i - 1]);
        let sum = v1 + v2 + curry;

        if (sum > 2) {
            res = '1' + res;
            curry = 1;
        } else if (sum > 1) {
            res = '0' + res;
            curry = 1;
        } else {
            res = sum + res;
            curry = 0;
        }
    }
    if (curry == 1) res = '1' + res;

    return res;
};

console.log(addBinary("1111", "1111"));
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));