/*

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

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
var isSymmetric = function (root) {
    let isSymmetricRec = (p, q) => {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val == q.val && isSymmetricRec(p.left, q.right) && isSymmetricRec(p.right, q.left);
    }

    return isSymmetricRec(root, root);
};

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.right = new TreeNode(2);
    node.left.left = new TreeNode(3);
    node.left.right = new TreeNode(4);
    node.right.left = new TreeNode(4);
    node.right.right = new TreeNode(3);

    console.log(isSymmetric(node));
}

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.right = new TreeNode(2);
    node.left.right = new TreeNode(3);
    node.right.right = new TreeNode(3);

    console.log(isSymmetric(node));
}