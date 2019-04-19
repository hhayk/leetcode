/*

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

    Given array nums = [-1, 2, 1, -4], and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let len = nums.length;
    let arr = nums.sort((a, b) => a - b);

    let closest = Number.MAX_VALUE;
    let closestSum = Number.MAX_VALUE;

    for (let i = 0; i < len - 2; i++) {
        let ni = nums[i];
        let left = i + 1;
        let right = len - 1;

        while (left < right) {
            let li = arr[left];
            let ri = arr[right];

            let sum = ni + li + ri;
            let distance = Math.abs(target - sum);
            if (distance < closest) {
                closest = distance;
                closestSum = sum;
            }

            if (sum < target) left++;
            else if (sum > target) right--;
            else return sum;
        }
    }

    return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 1, 2], 3));