/*

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();

    let setInMap = (nums, map) => nums.forEach(n => map.set(n, (map.get(n) || 0) + 1));
    setInMap(nums1, map1);
    setInMap(nums2, map2);

    let intersect = (m1, m2) => {
        let arr = [];
        for (let [key, _] of m1) {
            if (m2.has(key)) {
                let cnt = Math.min(m1.get(key), m2.get(key));
                let tmp = Array(cnt).fill(0).map(_ => key);
                arr.push(...tmp);
            }
        }
        return arr;
    }

    return map1.size > map2.size ? intersect(map1, map2) : intersect(map2, map1);
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));