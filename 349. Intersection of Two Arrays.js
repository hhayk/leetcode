/*

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let intersect = (s1, s2) => {
        let arr = [];
        for (let ss of s1) if (s2.has(ss)) arr.push(ss);
        return arr;
    }

    return set1.size > set2.size ? intersect(set1, set2) : intersect(set2, set1);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));