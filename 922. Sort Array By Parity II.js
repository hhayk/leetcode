/*

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 

Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000

*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let k = 1;
    for (let i = 0; i < A.length; i += 2) {
        if (A[i] % 2 == 1) {
            while (A[k] % 2 == 1) k += 2;

            [A[i], A[k]] = [A[k], A[i]];
        }
    }

    return A;
};

console.log(sortArrayByParityII([4, 1, 1, 0, 1, 0]));
console.log(sortArrayByParityII([4, 2, 5, 7]));
console.log(sortArrayByParityII([1, 4, 4, 3, 0, 3]));