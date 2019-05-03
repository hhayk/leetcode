/*

Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.

Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.

You may return the answer in any order.

 

Example 1:

Input: N = 3, K = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
Example 2:

Input: N = 2, K = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 

Note:

1 <= N <= 9
0 <= K <= 9

*/

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function (N, K) {
    let ret = new Set();

    let numsSameConsecDiffRec = (tmp) => {
        if (tmp.length == N) {
            let skip = tmp.length > 1 && tmp[0] == '0';
            if (!skip) ret.add(Number(tmp.join("")));
            return;
        }

        let last = tmp[tmp.length - 1];
        if (last - K >= 0) numsSameConsecDiffRec([...tmp, last - K]);
        if (last + K <= 9) numsSameConsecDiffRec([...tmp, last + K]);
    }

    for (let i = 0; i <= 9; i++) numsSameConsecDiffRec([i]);

    return [...ret];
};

console.log(numsSameConsecDiff(1, 0));
console.log(numsSameConsecDiff(2, 0));
console.log(numsSameConsecDiff(3, 7));
console.log(numsSameConsecDiff(2, 1));