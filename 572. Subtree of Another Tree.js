/*

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    let isEqual = (n1, n2) => {
        if (n1 == null && n2 == null) return true;
        if (n1 == null || n2 == null) return false;
        return n1.val == n2.val && isEqual(n1.left, n2.left) && isEqual(n1.right, n2.right);
    }
    let isSubtreeRec = (n1, n2) => n1 != null && (isEqual(n1, n2) || isSubtreeRec(n1.left, n2) || isSubtreeRec(n1.right, n2));

    return isSubtreeRec(s, t);
};

{
    let node1 = new TreeNode(3);
    node1.left = new TreeNode(4);
    node1.left.left = new TreeNode(1);
    node1.left.right = new TreeNode(2);
    node1.right = new TreeNode(5);

    let node2 = new TreeNode(4);
    node2.left = new TreeNode(1);
    node2.right = new TreeNode(2);

    console.log(isSubtree(node1, node2));
}
{
    let node1 = new TreeNode(3);
    node1.left = new TreeNode(4);
    node1.left.left = new TreeNode(1);
    node1.left.right = new TreeNode(2);
    node1.left.right.left = new TreeNode(0);
    node1.right = new TreeNode(5);

    let node2 = new TreeNode(4);
    node2.left = new TreeNode(1);
    node2.right = new TreeNode(2);

    console.log(isSubtree(node1, node2));
}