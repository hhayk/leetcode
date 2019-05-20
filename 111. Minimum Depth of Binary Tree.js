/*

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.

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
var minDepth = function (root) {
    if (!root) return 0;

    let minDepthRec = (root, height) => {
        if (!root) return Number.MAX_VALUE;
        if (!root.left && !root.right) return height + 1;
        return Math.min(minDepthRec(root.left, height + 1), minDepthRec(root.right, height + 1));
    }

    return minDepthRec(root, 0);
};

{
    let node = new TreeNode(3);
    node.left = new TreeNode(9);
    node.right = new TreeNode(20);
    node.right.left = new TreeNode(15);
    node.right.right = new TreeNode(7);
    console.log(minDepth(node));
}

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    console.log(minDepth(node));
}
{
    let node = new TreeNode(1);
    console.log(minDepth(node));
}
{
    let node = null;
    console.log(minDepth(node));
}