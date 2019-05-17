/*

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

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
var sumOfLeftLeaves = function (root) {
    let sumOfLeftLeavesRec = (root, parentIsLeft) => {
        if (!root) return 0;
        if (!root.left && !root.right) return parentIsLeft ? root.val : 0;
        let v1 = root.left ? sumOfLeftLeavesRec(root.left, true) : 0;
        let v2 = root.right ? sumOfLeftLeavesRec(root.right, false) : 0;
        return v1 + v2;
    }

    return sumOfLeftLeavesRec(root, false);
};

{
    let node = new TreeNode(3);
    node.left = new TreeNode(9);
    node.right = new TreeNode(20);
    node.right.left = new TreeNode(15);
    node.right.right = new TreeNode(7);
    console.log(sumOfLeftLeaves(node));
}