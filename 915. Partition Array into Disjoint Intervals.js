/*

Given an array A, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

 

Example 1:

    Input: [5,0,3,8,6]
    Output: 3
    Explanation: 
        left = [5,0,3], right = [8,6]

Example 2:

    Input: [1,1,1,0,6,12]
    Output: 4
    Explanation: 
        left = [1,1,1,0], right = [6,12]
 

Note:

2 <= A.length <= 30000
0 <= A[i] <= 10^6
It is guaranteed there is at least one way to partition A as described.

*/

/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function (A) {
    let max = A[0];
    let maxSoFar = 0;
    let left = 1;

    for (let i = 0; i < A.length; i++) {
        let ai = A[i];

        maxSoFar = Math.max(maxSoFar, ai);
        if (ai < max) {
            max = maxSoFar;
            left = i + 1;
        }
    }

    return left;
};

console.log(partitionDisjoint([1, 1]));
console.log(partitionDisjoint([90, 47, 69, 10, 43, 92, 31, 73, 61, 97]));
console.log(partitionDisjoint([5, 0, 3, 8, 6]));
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12]));