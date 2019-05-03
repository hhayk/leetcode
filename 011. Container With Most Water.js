/*

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

 



The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let len = height.length;
    // let maxArea = 0;

    // for (let i = 0; i < len; i++) {
    //     for (let j = i + 1; j < len; j++) {
    //         let area = Math.min(height[i], height[j]) * (j - i);
    //         maxArea = Math.max(maxArea, area);
    //     }
    // }

    // return maxArea;

    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let hl = height[left];
        let hr = height[right];
        let area = Math.min(hl, hr) * (right - left);
        maxArea = Math.max(maxArea, area);

        if (hl > hr) right--;
        else left++;
    }

    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));