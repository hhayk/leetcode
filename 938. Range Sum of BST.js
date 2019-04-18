/*

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

 

Example 1:

    Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
    Output: 32

Example 2:

    Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
    Output: 23
 

Note:

The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.

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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    let rangeSumBSTRec = (root, L, R) => {
        if (root == null) return 0;

        let val = root.val >= L && root.val <= R ? root.val : 0;
        return rangeSumBSTRec(root.left, L, R) + rangeSumBSTRec(root.right, L, R) + val;
    }

    return rangeSumBSTRec(root, L, R);
};

{
    let tree = new TreeNode(10);
    tree.left = new TreeNode(5);
    tree.right = new TreeNode(15);
    tree.left.left = new TreeNode(3);
    tree.left.right = new TreeNode(7);
    tree.right.right = new TreeNode(18);

    console.log(rangeSumBST(tree, 7, 15));
}
// console.log(rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10));