/*

-- NOT SOLVED

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

    Input: S = "ADOBECODEBANC", T = "ABC"
    Output: "BANC"

Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let len = s.length;
    let right = 0;
    let aCharCode = 'A'.charCodeAt(0);
    let set = new Set([...t]);

    let isValid = (arr, t) => {
        if (arr.filter(a => set.has(a)).length < t.length) return false;

        let tmp = Array(26 * 2 + 8).fill(0);
        for (let i = 0; i < t.length; i++) {
            let idx = t.charCodeAt(i) - aCharCode;
            tmp[idx]++;
        }
        for (let i = 0; i < arr.length; i++) {
            let idx = arr[i].charCodeAt(0) - aCharCode;
            tmp[idx]--;
        }
        return tmp.every(t => t <= 0);
    }

    let ret = "";
    let tmp = [];
    while (right <= len) {
        let ch = s.charAt(right++);
        tmp.push(ch);

        if (set.has(ch)) {
            while (isValid(tmp, t)) {
                if (!ret.length || ret.length > tmp.length) ret = tmp.join("");
                tmp.shift();

                while (tmp.length && !set.has(tmp[0])) tmp.shift();
            }
        }
    }

    return ret;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("ab", "A"));