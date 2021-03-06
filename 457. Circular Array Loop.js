/*

-- NOT SOLVED

You are given a circular array nums of positive and negative integers. If a number k at an index is positive, then move forward k steps. Conversely, if it's negative (-k), move backward k steps. Since the array is circular, you may assume that the last element's next element is the first element, and the first element's previous element is the last element.

Determine if there is a loop (or a cycle) in nums. A cycle must start and end at the same index and the cycle's length > 1. Furthermore, movements in a cycle must all follow a single direction. In other words, a cycle must not consist of both forward and backward movements.

 

Example 1:

Input: [2,-1,1,2,2]
Output: true
Explanation: There is a cycle, from index 0 -> 2 -> 3 -> 0. The cycle's length is 3.
Example 2:

Input: [-1,2]
Output: false
Explanation: The movement from index 1 -> 1 -> 1 ... is not a cycle, because the cycle's length is 1. By definition the cycle's length must be greater than 1.
Example 3:

Input: [-2,1,-1,-2,-2]
Output: false
Explanation: The movement from index 1 -> 2 -> 1 -> ... is not a cycle, because movement from index 1 -> 2 is a forward movement, but movement from index 2 -> 1 is a backward movement. All movements in a cycle must follow a single direction.
 

Note:

-1000 ≤ nums[i] ≤ 1000
nums[i] ≠ 0
1 ≤ nums.length ≤ 5000

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        let visited = Array(len).fill(false)
        if (!visited[i]) {
            let idx = i;
            let tmp = 1;
            let cir = 1;
            let dir = nums[i] > 0;

            while (!visited[idx]) {
                visited[idx] = true;

                let newDir = nums[idx] > 0;
                if (newDir != dir) return false;

                let newIdx = idx + nums[idx];
                if (newIdx >= len) {
                    newIdx = newIdx - len;
                    if (cir-- < 0) return false;
                }
                if (newIdx < 0) {
                    newIdx = len + newIdx;
                    if (cir-- < 0) return false;
                }

                idx = newIdx;
                console.log(idx, tmp)
                tmp++;
            }

            if (idx == i && tmp > 1) return true;
        }
    }

    return false;
};

console.log(circularArrayLoop([-1, -2, -3, -4, -5]));
// console.log(circularArrayLoop([1, 1, 2]));
// console.log(circularArrayLoop([2, -1, 1, -2, -2]));
// console.log(circularArrayLoop([2, -1, 1, 2, 2]));
// console.log(circularArrayLoop([-1, 2]));
// console.log(circularArrayLoop([-2, 1, -1, -2, -2]));