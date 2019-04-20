/*

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

    Given the following tree [3,9,20,null,null,15,7]:

        3
    / \
    9  20
        /  \
    15   7
    Return true.

Example 2:

    Given the following tree [1,2,2,3,3,null,null,4,4]:

        1
        / \
        2   2
        / \
    3   3
    / \
    4   4
    Return false.

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;

    let diff = Math.abs(isBalancedRec(root.left) - isBalancedRec(root.right));
    return diff < 2 && isBalanced(root.left) && isBalanced(root.right);   
};

var isBalancedRec = function(root) {
    if (!root) return 0;
    return 1 + Math.max(isBalancedRec(root.left), isBalancedRec(root.right));
}

{
    let tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);

    console.log(isBalanced(tree));
}
{
    let tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(2);
    tree.left.left = new TreeNode(3);
    tree.left.right = new TreeNode(3);
    tree.left.left.left = new TreeNode(4);
    tree.left.left.right = new TreeNode(4);

    console.log(isBalanced(tree));
}