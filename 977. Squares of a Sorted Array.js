/*

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.v

*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let ret = []
    let negArr = [];

    while (A.length) {
        let val = A.shift();
        let valSqr = val * val;

        if (val < 0) negArr.unshift(valSqr);
        else {
            while (negArr.length && valSqr > negArr[0]) ret.push(negArr.shift());
            ret.push(valSqr);
        }
    }
    while (negArr.length) ret.push(negArr.shift());

    return ret;
};

console.log(sortedSquares([-1]));
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));