/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

    Input: "A man, a plan, a canal: Panama"
    Output: true

Example 2:

    Input: "race a car"
    Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let regex = /[^a-z0-9]/;
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let lch = s[left].toLocaleLowerCase();
        let rch = s[right].toLocaleLowerCase();

        if (regex.test(lch)) {
            left++;
            continue;
        }
        if (regex.test(rch)) {
            right--;
            continue;
        }

        if (lch === rch) {
            left++;
            right--;
        } else return false;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("OP"));