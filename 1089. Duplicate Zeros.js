/*

Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

 

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9

*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        if (arr[i] == 0) {
            let j = len;
            while (--j > i) {
                arr[j] = arr[j - 1];
            }
            if(i + 1 < len) {
                arr[i + 1] = 0;
                i++;
            }
        }
    }

    return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 2, 3]));
console.log(duplicateZeros([0, 0, 0, 0, 0, 0, 0]));