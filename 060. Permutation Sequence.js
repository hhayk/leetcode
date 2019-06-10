/*

The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let fact = Array(n + 1);
    let sum = 1;
    
    fact[0] = 1;
    for (let i = 1; i <= n; i++) {
        sum *= i;
        fact[i] = sum;
    }

    k--;

    let arr = [...Array(n)].map((_, i) => i + 1);
    let res = "";
    for (let i = 1; i <= n; i++) {
        let idx = ~~(k / fact[n - i]);
        res += arr[idx].toString();
        arr.splice(idx, 1);
        k -= idx * fact[n - i];
    }

    return res;
};

console.log(getPermutation(3, 3))
console.log(getPermutation(4, 9))
console.log(getPermutation(3, 5))