/*

Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
Example 3:

Input: name = "leelee", typed = "lleeelee"
Output: true
Example 4:

Input: name = "laiden", typed = "laiden"
Output: true
Explanation: It's not necessary to long press any character.
 

Note:

name.length <= 1000
typed.length <= 1000
The characters of name and typed are lowercase letters.

*/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let ni = 0;
    let ti = 0;

    while (ni < name.length || ti < typed.length) {
        if (name[ni] == typed[ti]) {
            ni++;
            ti++;
        } else {
            let cnt = 0;
            while (name[ni - 1] == typed[ti]) {
                cnt++;
                ti++;
            }

            if (cnt == 0) return false;
        }
    }

    return true;
};

console.log(isLongPressedName("kikcxmvzi", "kiikcxxmmvvzz"));
console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("leelee", "lleeelee"));
console.log(isLongPressedName("laiden", "laiden"));