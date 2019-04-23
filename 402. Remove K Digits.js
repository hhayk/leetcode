/*

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

    Input: num = "1432219", k = 3
    Output: "1219"
    Explanation: 
        Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:

    Input: num = "10200", k = 1
    Output: "200"
    Explanation: 
        Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:

    Input: num = "10", k = 2
    Output: "0"
    Explanation: 
        Remove all the digits from the number and it is left with nothing which is 0.

*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let len = num.length;
    let stack = [];

    for (let i = 0; i < len; i++) {
        let ni = num.charAt(i);

        while (k > 0 && stack.length && stack[stack.length - 1] > ni) {
            stack.pop();
            k--;
        }

        stack.push(ni);
    }

    stack = k > 0 ? stack.slice(0, -k) : stack;
    return stack.join("").replace(/^0+/, '') || '0';
};

console.log(removeKdigits("1107", 1));
console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
// console.log(removeKdigits("10", 2));
// console.log(removeKdigits("9", 1));
