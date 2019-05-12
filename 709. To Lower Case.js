/*

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"

*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let AcharCode = 'A'.charCodeAt(0);
    let ZcharCode = 'Z'.charCodeAt(0);
    let diff = 'a'.charCodeAt(0) - AcharCode;

    let codes = [...str].map(ch => {
        let code = ch.charCodeAt(0);
        return code + (code >= AcharCode && code <= ZcharCode ? diff : 0);
    })
    return String.fromCharCode(...codes);
};

console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));