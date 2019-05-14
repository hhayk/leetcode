/*

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

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
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let arr = [];
    let kthSmallestRec = (root) => {
        if (!root) return;
        kthSmallestRec(root.left);
        arr.push(root.val);
        kthSmallestRec(root.right);
    }

    kthSmallestRec(root);
    return arr[k - 1];
};

{
    let node = new TreeNode(3);
    node.left = new TreeNode(1);
    node.left.right = new TreeNode(2);
    node.right = new TreeNode(4);
    console.log(kthSmallest(node, 1));
}
{
    let node = new TreeNode(5);
    node.left = new TreeNode(3);
    node.left.left = new TreeNode(2);
    node.left.left.left = new TreeNode(1);
    node.left.right = new TreeNode(4);
    node.right = new TreeNode(6);
    console.log(kthSmallest(node, 3));
}