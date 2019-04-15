/*

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

    preorder = [3,9,20,15,7]
    inorder = [9,3,15,20,7]

Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let buildTreeRec = (left, right) => {
        if (left > right) return null;

        let root = preorder.shift();
        let ii = inorder.indexOf(root);

        let node = new TreeNode(root);
        node.left = buildTreeRec(left, ii - 1);
        node.right = buildTreeRec(ii + 1, right);

        return node;
    }

    return buildTreeRec(0, preorder.length - 1);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));