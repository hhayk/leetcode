/*

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
    Input: "aba"
    Output: True

Example 2:
    Input: "abca"
    Output: True

Explanation: You could delete the character 'c'.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let regex = /[^a-z0-9]/;
    let left = 0;
    let right = s.length - 1;
    let skip = 1;

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
        } else if (skip >= 0) {
            if(skip == 1) {
                left++;
            } else {
                left--;
                right--;
            }
            skip--;
        } else return false;
    }

    return true;
};

console.log(validPalindrome("abc"));
console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));