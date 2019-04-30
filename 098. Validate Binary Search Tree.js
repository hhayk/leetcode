/*

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

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
var isValidBST = function (root) {
    if (!root) return true;

    let arr = [];
    let isValidBSTRec = (root) => {
        if (!root) return;

        isValidBSTRec(root.left);
        arr.push(root.val);
        isValidBSTRec(root.right);
    }

    isValidBSTRec(root);
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] <= arr[i-1]) return false;
    }
    return true;
};

{
    let node = new TreeNode(10);
    node.left = new TreeNode(5);
    node.right = new TreeNode(15);
    node.right.left = new TreeNode(6);
    node.right.right = new TreeNode(20);
    console.log(isValidBST(node))
}
{
    let node = new TreeNode(2);
    node.left = new TreeNode(1);
    node.right = new TreeNode(3);
    console.log(isValidBST(node))
}
{
    let node = new TreeNode(5);
    node.left = new TreeNode(1);
    node.right = new TreeNode(4);
    node.right.left = new TreeNode(3);
    node.right.right = new TreeNode(6);
    console.log(isValidBST(node))
}

