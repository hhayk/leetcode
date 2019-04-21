/*

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

    Input: "aab"
    Output:
        [
            ["aa","b"],
            ["a","a","b"]
        ]

*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let len = s.length;
    let acc = [];
    let tmp = [];

    let isPalindrom = (si, ei) => {
        while (si < ei) if (s[si++] != s[ei--]) return false;
        return true;
    }

    let partitionRec = (si) => {
        if (si == len) {
            acc.push(tmp.slice());
            return
        }
        for (let i = si; i < len; i++) {
            if (isPalindrom(si, i)) {
                tmp.push(s.substring(si, i + 1));
                partitionRec(i + 1);
                tmp.pop();
            }
        }
    }

    partitionRec(0);
    return acc;
};

console.log(partition("aab"));
console.log(partition("aaab"));