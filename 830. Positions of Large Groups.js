/*

In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

 

Example 1:

Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
Example 2:

Input: "abc"
Output: []
Explanation: We have "a","b" and "c" but no large group.
Example 3:

Input: "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
 

Note:  1 <= S.length <= 1000

*/

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    let arr = [];
    let left = 0;
    let right = 0;

    while (right <= S.length) {
        if (S[left] == S[right]) right++;
        else {
            if (right - left >= 3) {
                arr.push([left, right - 1]);
            }
            
            left = right;
        }
    }

    return arr;
};

console.log(largeGroupPositions("aaa"));
console.log(largeGroupPositions("abbxxxxzzy"));
console.log(largeGroupPositions("abc"));
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));