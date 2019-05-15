/*

For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Write a function that determines whether two binary trees are flip equivalent.  The trees are given by root nodes root1 and root2.

 

Example 1:

Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.
Flipped Trees Diagram
 

Note:

Each tree will have at most 100 nodes.
Each value in each tree will be a unique integer in the range [0, 99].

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val != root2.val) return false;
    return flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right) ||
        flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
};

{
    let node1 = new TreeNode(1);
    node1.left = new TreeNode(2);
    node1.left.left = new TreeNode(4);
    node1.left.right = new TreeNode(5);
    node1.left.right.left = new TreeNode(7);
    node1.left.right.right = new TreeNode(8);
    node1.right = new TreeNode(3);
    node1.right.left = new TreeNode(6);

    let node2 = new TreeNode(1);
    node2.left = new TreeNode(3);
    node2.left.right = new TreeNode(6);
    node2.right = new TreeNode(2);
    node2.right.left = new TreeNode(4);
    node2.right.right = new TreeNode(5);
    node2.right.right.left = new TreeNode(8);
    node2.right.right.right = new TreeNode(7);

    console.log(flipEquiv(node1, node2));
}