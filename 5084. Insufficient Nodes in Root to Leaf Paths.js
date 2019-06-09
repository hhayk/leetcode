/*

Given the root of a binary tree, consider all root to leaf paths: paths from the root to any leaf.  (A leaf is a node with no children.)

A node is insufficient if every such root to leaf path intersecting this node has sum strictly less than limit.

Delete all insufficient nodes simultaneously, and return the root of the resulting binary tree.

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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
    let rec = (root, sum) => {
        if (!root) return 0;

        let ss = sum + root.val;
        let left = rec(root.left, ss);
        let right = rec(root.right, ss);

        if (left + ss < limit) root.left = null;
        if (right + ss < limit) root.right = null;

        return Math.max(left, right) + root.val;
    }

    return rec(root, 0) >= limit ? root : null;
};

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.left = new TreeNode(4);
    node.left.left.left = new TreeNode(8);
    node.left.left.right = new TreeNode(9);
    node.left.right = new TreeNode(-99);
    node.left.right.left = new TreeNode(-99);
    node.left.right.right = new TreeNode(-99);
    node.right = new TreeNode(3);
    node.right.left = new TreeNode(-99);
    node.right.left.left = new TreeNode(12);
    node.right.left.right = new TreeNode(13);
    node.right.right = new TreeNode(7);
    node.right.right.left = new TreeNode(-99);
    node.right.right.right = new TreeNode(14);

    console.log(sufficientSubset(node, 1));
}