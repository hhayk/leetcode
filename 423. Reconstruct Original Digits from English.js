/*

Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

Note:
Input contains only lowercase English letters.
Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
Input length is less than 50,000.
Example 1:
Input: "owoztneoer"

Output: "012"
Example 2:
Input: "fviefuro"

Output: "45"

*/

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let arr = Array(26).fill(0);
    let len = s.length - 1;
    let aCharCode = 'a'.charCodeAt(0);
    let res = [];
    
    let cleanupDigit = (str) => {
        [...str].map(ch => ch.charCodeAt(0) - aCharCode).forEach(i => arr[i]--);
        len -= str.length;
        res.push(digits.indexOf(str));
    }

    [...s].forEach(ch => arr[ch.charCodeAt(0) - aCharCode]++);
    while (len > 0) {
        while (arr["z".charCodeAt(0) - aCharCode] > 0) cleanupDigit("zero");
        while (arr["w".charCodeAt(0) - aCharCode] > 0) cleanupDigit("two");
        while (arr["u".charCodeAt(0) - aCharCode] > 0) cleanupDigit("four");
        while (arr["x".charCodeAt(0) - aCharCode] > 0) cleanupDigit("six");
        while (arr["g".charCodeAt(0) - aCharCode] > 0) cleanupDigit("eight");
        while (arr["o".charCodeAt(0) - aCharCode] > 0) cleanupDigit("one");
        while (arr["t".charCodeAt(0) - aCharCode] > 0) cleanupDigit("three");
        while (arr["f".charCodeAt(0) - aCharCode] > 0) cleanupDigit("five");
        while (arr["s".charCodeAt(0) - aCharCode] > 0) cleanupDigit("seven");
        while (arr["n".charCodeAt(0) - aCharCode] > 0) cleanupDigit("nine");
    }

    return res.sort().join("");
};

console.log(originalDigits("owoztneoer"));
console.log(originalDigits("fviefuro"));