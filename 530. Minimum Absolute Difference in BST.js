/*

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 

Note: There are at least two nodes in this BST.

*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let arr = [];
    let getMinimumDifferenceRec = (root) => {
        if (!root) return;
        arr.push(root.val);
        getMinimumDifferenceRec(root.left);
        getMinimumDifferenceRec(root.right);
    }

    getMinimumDifferenceRec(root);
    arr = [12, 8, 16, 4];
    arr.sort((a, b) => a - b);
    console.log(arr)

    let min = Number.MAX_VALUE;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i - 1]);
    }
    return min;
};

{
    let node = new TreeNode(1);
    node.right = new TreeNode(3);
    node.right.left = new TreeNode(2);
    console.log(getMinimumDifference(node));
}