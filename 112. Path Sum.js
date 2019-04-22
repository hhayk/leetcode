/*

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

    Given the below binary tree and sum = 22,

        5
        / \
        4   8
    /   / \
    11  13  4
    /  \      \
    7    2      1
    return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false;

    let ss = sum - root.val;
    return (!root.left && !root.right) ?
        ss == 0 :
        hasPathSum(root.left, ss) || hasPathSum(root.right, ss);
};

{
    let node = new TreeNode(5);
    node.left = new TreeNode(4);
    node.left.left = new TreeNode(11);
    node.left.left.left = new TreeNode(7);
    node.left.left.right = new TreeNode(2);
    node.right = new TreeNode(8);
    node.right.left = new TreeNode(13);
    node.right.right = new TreeNode(4);
    node.right.right.right = new TreeNode(1);

    console.log(hasPathSum(node, 22));
}

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);

    console.log(hasPathSum(node, 1));
}