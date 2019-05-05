/*

Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

If it is impossible to form any triangle of non-zero area, return 0.

 

Example 1:

Input: [2,1,2]
Output: 5
Example 2:

Input: [1,2,1]
Output: 0
Example 3:

Input: [3,2,3,4]
Output: 10
Example 4:

Input: [3,6,2,3]
Output: 8
 

Note:

3 <= A.length <= 10000
1 <= A[i] <= 10^6

*/

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    A.sort((a, b) => b - a);
    
    for (let i = 2; i < A.length; i++) {
        if (A[i - 2] < A[i - 1] + A[i]) return A[i - 2] + A[i - 1] + A[i];
    }
    return 0;
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1]));
console.log(largestPerimeter([3, 2, 3, 4]));
console.log(largestPerimeter([3, 6, 2, 3]));