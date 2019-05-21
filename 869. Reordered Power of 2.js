/*

Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

 

Example 1:

Input: 1
Output: true
Example 2:

Input: 10
Output: false
Example 3:

Input: 16
Output: true
Example 4:

Input: 24
Output: false
Example 5:

Input: 46
Output: true
 

Note:

1 <= N <= 10^9

*/

/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
    let countDigits = (num) => {
        let arr = Array(10).fill(0);
        while (num != 0) {
            arr[num % 10]++;
            num = ~~(num / 10);
        }
        return arr;
    }
    let equals = (arr1, arr2) => arr1.every((ai, i) => ai == arr2[i]);

    let arr = countDigits(N);
    for (let i = 0; i < 31; i++) {
        if (equals(arr, countDigits(1 << i))) return true;
    }

    return false;
};

console.log(reorderedPowerOf2(1));
console.log(reorderedPowerOf2(10));
console.log(reorderedPowerOf2(16));
console.log(reorderedPowerOf2(24));
console.log(reorderedPowerOf2(46));