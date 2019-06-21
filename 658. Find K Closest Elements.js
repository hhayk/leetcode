/*

Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

Example 1:
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
Example 2:
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
Note:
The value k is positive and will always be smaller than the length of the sorted array.
Length of the given array is positive and will not exceed 104
Absolute value of elements in the array and x will not exceed 104
UPDATE (2017/9/19):
The arr parameter had been changed to an array of integers (instead of a list of integers). Please reload the code definition to get the latest changes.

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let findPivot = (left, right) => {
        if (arr[right] <= x) return right;
        if (arr[left] > x) return left;

        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= x && arr[mid + 1] > x) return mid;

        return arr[mid] < x ? findPivot(mid + 1, right) : findPivot(left, mid - 1);
    }

    let len = arr.length;
    let left = findPivot(0, len - 1);
    let right = left + 1;
    let cnt = 0;
    let ret = [];

    while (arr[left] == x && cnt < k && left > 0) {
        ret.push(arr[left--]);
        cnt++;
    }

    while (left >= 0 && right < len && cnt++ < k) {
        if (x - arr[left] <= arr[right] - x) {
            ret.push(arr[left--]);
        } else {
            ret.push(arr[right++]);
        }
    }

    while (cnt < k && left >= 0) {
        ret.push(arr[left--]);
        cnt++;
    }
    while (cnt < k && right < len) {
        ret.push(arr[right++]);
        cnt++;
    }

    return ret.sort((a, b) => a - b);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4], 4, -1));
console.log(findClosestElements([1, 2, 3, 4, 5], 2, 4));
console.log(findClosestElements([0, 0, 1, 2, 3, 3, 4, 7, 7, 8], 3, 5));