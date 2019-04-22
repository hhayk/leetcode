/*

Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

Example 1:
    Input: [3, 1, 4, 1, 5], k = 2
    Output: 2
    Explanation: 
        There are two 2-diff pairs in the array, (1, 3) and (3, 5).
        Although we have two 1s in the input, we should only return the number of unique pairs.

Example 2:
    Input:[1, 2, 3, 4, 5], k = 1
    Output: 4
    Explanation: 
        There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).

Example 3:
    Input: [1, 3, 1, 5, 4], k = 0
    Output: 1
    Explanation: 
        There is one 0-diff pair in the array, (1, 1).

Note:
The pairs (i, j) and (j, i) count as the same pair.
The length of the array won't exceed 10,000.
All the integers in the given input belong to the range: [-1e7, 1e7].

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let len = nums.length;
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = left + 1;
    let set = new Set();

    while (right < len) {
        let li = nums[left];
        let ri = nums[right];
        let diff = ri - li;

        if (diff < k) right++
        else if (diff > k) {
            left++;
            if (left == right) right++
        }
        else {
            set.add(li + ' ' + ri);
            left++;
            right = left + 1;
        }
    }

    return set.size;
};

console.log(findPairs([3, 1, 4, 1, 5], 2));
console.log(findPairs([1, 2, 3, 4, 5], 1));
console.log(findPairs([1, 3, 1, 5, 4], 0));
console.log(findPairs([1, 2, 3, 4, 5], 2));