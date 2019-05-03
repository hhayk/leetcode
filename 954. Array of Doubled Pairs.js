/*

Given an array of integers A with even length, return true if and only if it is possible to reorder it such that A[2 * i + 1] = 2 * A[2 * i] for every 0 <= i < len(A) / 2.

 

Example 1:

Input: [3,1,3,6]
Output: false
Example 2:

Input: [2,1,2,6]
Output: false
Example 3:

Input: [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
Example 4:

Input: [1,2,4,16,8,4]
Output: false
 

Note:

0 <= A.length <= 30000
A.length is even
-100000 <= A[i] <= 100000

*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function (A) {
    let map = new Map();
    for (let a of A) map.set(a, (map.get(a) || 0) + 1);

    let arr = A.slice();
    arr.sort((a, b) => Math.abs(a) - Math.abs(b));

    for (let a of arr) {
        if (map.get(a) == 0) continue;
        if ((map.get(2 * a) || 0) == 0) return false;

        map.set(a, map.get(a) - 1);
        map.set(2 * a, map.get(2 * a) - 1);
    }

    return true; 
};

console.log(canReorderDoubled([3, 1, 3, 6]));
console.log(canReorderDoubled([2, 1, 2, 6]));
console.log(canReorderDoubled([4, -2, 2, -4]));
console.log(canReorderDoubled([1, 2, 4, 16, 8, 4]));