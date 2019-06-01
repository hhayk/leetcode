/*

Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
 

Example 2:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let set = new Set();

    let traverse = (root) => {
        if (!root) return false;
        if (set.has(root.val)) return true;
        set.add(k - root.val);
        return traverse(root.left) || traverse(root.right);
    }
    return traverse(root);
};

{
    let node = new TreeNode(5);
    node.left = new TreeNode(3);
    node.left.left = new TreeNode(2);
    node.left.right = new TreeNode(4);
    node.right = new TreeNode(6);
    node.right.right = new TreeNode(7);

    console.log(findTarget(node, 9));
}