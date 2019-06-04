/*

On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

Given row N and index K, return the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed).

Examples:
Input: N = 1, K = 1
Output: 0

Input: N = 2, K = 1
Output: 0

Input: N = 2, K = 2
Output: 1

Input: N = 4, K = 5
Output: 1

Explanation:
row 1: 0
row 2: 01
row 3: 0110
row 4: 01101001
Note:

N will be an integer in the range [1, 30].
K will be an integer in the range [1, 2^(N-1)].

*/

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
    return N == 1 ? 0 : (kthGrammar(N - 1, Math.floor((K + 1) / 2)) + 1 - K % 2) % 2;
};

console.log(kthGrammar(1, 1));
console.log(kthGrammar(2, 1));
console.log(kthGrammar(2, 2));
console.log(kthGrammar(3, 2));
console.log(kthGrammar(4, 5));
// console.log(kthGrammar(5, 5));
// console.log(kthGrammar(6, 5));
console.log(kthGrammar(30, 434991989));